import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gq5mk-mss.css';
import '../../css/g/gz4lvbqjk.css';
import '../../css/i/ibaf-mb8a.css';
import '../../css/f/flh4gv_zw.css';
import '../../css/c/c83o5qmdl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="gq5mk-mss"/><circle class="gz4lvbqjk"/><circle class="ibaf-mb8a"/><circle class="flh4gv_zw"/><circle class="c83o5qmdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-calendar-mark-calendar-date-day-month-mark"} {...others} />);
}

export default Component;
