import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ipb9__dlq.css';
import '../../css/g/gq5mk-mss.css';
import '../../css/a/adr7gbcwe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ipb9__dlq"/><path class="gq5mk-mss"/><path class="adr7gbcwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-calendar-date-month-thirty-thirty-calendar-date-week-day-month"} {...others} />);
}

export default Component;
