import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/at2izmb5l.css';
import '../../css/l/lvmg8g6js.css';
import '../../css/h/hta33-9ph.css';
import '../../css/p/ps6gdacnv.css';
import '../../css/t/tsa3egbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="at2izmb5l wm-shadow"/><path class="lvmg8g6js wm-shadow"/><path class="hta33-9ph"/><path class="ps6gdacnv"/><path class="tsa3egbgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:thermometer-snowflake"} {...others} />);
}

export default Component;
