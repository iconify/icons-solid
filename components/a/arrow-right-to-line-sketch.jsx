import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yhos5ubjh.css';
import '../../css/g/gg7k0m7bl.css';
import '../../css/t/ti3m8jkqo.css';
import '../../css/x/xstlfobii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yhos5ubjh"/><path class="gg7k0m7bl wm-a"/><path class="ti3m8jkqo wm-k"/><path class="wm-a xstlfobii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-right-to-line-sketch"} {...others} />);
}

export default Component;
