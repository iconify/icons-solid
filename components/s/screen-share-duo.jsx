import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tu0-m0rqe.css';
import '../../css/j/jmku5acuo.css';
import '../../css/c/csac9jvtl.css';
import '../../css/v/vxuqhab0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tu0-m0rqe"/><path class="jmku5acuo wm-s"/><path class="csac9jvtl"/><path class="vxuqhab0r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:screen-share-duo"} {...others} />);
}

export default Component;
