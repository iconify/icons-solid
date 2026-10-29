import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u9qz1eb7n.css';
import '../../css/h/huw3ambik.css';
import '../../css/o/og437mbap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u9qz1eb7n"/><path class="huw3ambik wm-shadow"/><path class="og437mbap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-top-engrave"} {...others} />);
}

export default Component;
