import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/iv7iptbda.css';
import '../../css/j/jlhhcybzn.css';
import '../../css/x/xqto25bur.css';
import '../../css/y/yilw6-bgb.css';
import '../../css/v/vxl43gwxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="iv7iptbda wm-shadow"/><path class="jlhhcybzn wm-shadow"/><path class="xqto25bur"/><path class="yilw6-bgb"/><path class="vxl43gwxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:server"} {...others} />);
}

export default Component;
