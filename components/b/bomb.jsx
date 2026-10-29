import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kn8r6wbax.css';
import '../../css/b/b439fkbnw.css';
import '../../css/m/m4rdlnbto.css';
import '../../css/z/zxjbb5bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="kn8r6wbax wm-k"/><path class="b439fkbnw wm-s"/><path class="m4rdlnbto"/><path class="zxjbb5bdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bomb"} {...others} />);
}

export default Component;
