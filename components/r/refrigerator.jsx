import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gicwe6q8a.css';
import '../../css/i/i693_jxsz.css';
import '../../css/t/t46u6_y3c.css';
import '../../css/c/cpy9cf_xf.css';
import '../../css/c/ccfdzwb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="gicwe6q8a wm-shadow"/><path class="i693_jxsz wm-shadow"/><path class="t46u6_y3c"/><path class="cpy9cf_xf"/><path class="ccfdzwb1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:refrigerator"} {...others} />);
}

export default Component;
