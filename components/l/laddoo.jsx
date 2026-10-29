import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/al4914byu.css';
import '../../css/b/b-48qzbat.css';
import '../../css/o/o0j4sf91j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="al4914byu wm-k"/><path class="b-48qzbat wm-a"/><path class="o0j4sf91j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:laddoo"} {...others} />);
}

export default Component;
