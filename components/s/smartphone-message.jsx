import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r3nzg1qsv.css';
import '../../css/r/rhtvc5b2j.css';
import '../../css/a/a4xahbcvl.css';
import '../../css/s/sbaccmr_s.css';
import '../../css/k/kasiafbja.css';
import '../../css/a/a0bfautkd.css';
import '../../css/i/it1ozmb1i.css';
import '../../css/o/o2r9dl6rm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="r3nzg1qsv wm-shadow"/><path class="rhtvc5b2j wm-s"/><path class="a4xahbcvl wm-shadow"/><path class="sbaccmr_s"/><path class="kasiafbja"/><path class="a0bfautkd wm-s"/><path class="it1ozmb1i wm-s"/><path class="o2r9dl6rm wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:smartphone-message"} {...others} />);
}

export default Component;
