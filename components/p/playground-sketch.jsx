import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eh56edcyw.css';
import '../../css/t/t8a7fpred.css';
import '../../css/a/awkx36b2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="eh56edcyw wm-k"/><path class="t8a7fpred wm-k"/><path class="awkx36b2i wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:playground-sketch"} {...others} />);
}

export default Component;
