import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/g/ge35osufx.css';
import '../../css/x/xo0gn7bpl.css';
import '../../css/j/j-l21uo-c.css';
import '../../css/y/ynqplacsi.css';
import '../../css/j/jed98nbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="aqhok2bbj"/><path class="ge35osufx"/><path class="xo0gn7bpl"/><path class="j-l21uo-c"/><path class="ynqplacsi"/><path class="jed98nbpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:help-broken"} {...others} />);
}

export default Component;
