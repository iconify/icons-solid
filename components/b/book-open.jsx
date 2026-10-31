import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l4o723les.css';
import '../../css/x/xjwpjterx.css';
import '../../css/u/u-a9kl7lp.css';
import '../../css/v/vagq27ajr.css';
import '../../css/t/ts_tupb_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="l4o723les wm-shadow"/><path class="wm-shadow xjwpjterx"/><path class="u-a9kl7lp"/><path class="vagq27ajr"/><path class="ts_tupb_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:book-open"} {...others} />);
}

export default Component;
