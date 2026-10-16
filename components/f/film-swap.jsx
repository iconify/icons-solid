import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajl2saccr.css';
import '../../css/h/h0e9tcb_u.css';
import '../../css/h/hxunfkbdr.css';
import '../../css/v/vpoz4-5pa.css';
import '../../css/i/i4w3lbvbu.css';
import '../../css/c/c446dzblv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ajl2saccr"/><path class="h0e9tcb_u"/><path class="hxunfkbdr"/><path class="vpoz4-5pa"/><path class="i4w3lbvbu"/><path class="c446dzblv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:film-swap"} {...others} />);
}

export default Component;
