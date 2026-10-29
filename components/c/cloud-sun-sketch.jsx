import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j69w18q7w.css';
import '../../css/m/m-yk4bbsg.css';
import '../../css/b/be1mx_mxo.css';
import '../../css/e/enzm_x5xp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j69w18q7w"/><path class="m-yk4bbsg wm-a"/><path class="be1mx_mxo wm-k"/><path class="enzm_x5xp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-sun-sketch"} {...others} />);
}

export default Component;
