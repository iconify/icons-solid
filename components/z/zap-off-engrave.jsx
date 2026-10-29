import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ccyqkhomb.css';
import '../../css/i/i64imcqzx.css';
import '../../css/m/m9qb4nitn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ccyqkhomb"/><path class="i64imcqzx wm-shadow"/><path class="m9qb4nitn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:zap-off-engrave"} {...others} />);
}

export default Component;
