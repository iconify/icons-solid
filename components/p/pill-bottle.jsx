import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aqo_2k_tl.css';
import '../../css/x/xii1w2bek.css';
import '../../css/h/he97x-jqd.css';
import '../../css/e/en969cb9g.css';
import '../../css/n/nrvqvld_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="aqo_2k_tl wm-shadow"/><path class="wm-shadow xii1w2bek"/><path class="he97x-jqd"/><path class="en969cb9g"/><path class="nrvqvld_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:pill-bottle"} {...others} />);
}

export default Component;
