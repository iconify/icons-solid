import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kgpqr0jik.css';
import '../../css/t/tn--5psox.css';
import '../../css/s/sfpzz6dun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="kgpqr0jik"/><path class="tn--5psox"/><path class="sfpzz6dun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:gingerbread-man"} {...others} />);
}

export default Component;
