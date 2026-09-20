import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3v9w8ber.css';
import '../../css/l/l8qut_ybc.css';
import '../../css/c/catxwhxql.css';
import '../../css/h/hum-5r2tq.css';
import '../../css/l/lllfscbyi.css';
import '../../css/n/npk9zfbyy.css';
import '../../css/d/dqotoobdb.css';
import '../../css/g/gsqda9qkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w3v9w8ber"/><path class="l8qut_ybc"/><path class="catxwhxql"/><path class="hum-5r2tq"/><path class="lllfscbyi"/><path class="npk9zfbyy"/><path class="dqotoobdb"/><path class="gsqda9qkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:lock-hierarchy"} {...others} />);
}

export default Component;
