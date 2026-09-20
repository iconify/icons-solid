import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3m25tbey.css';
import '../../css/c/cbqe24tlg.css';
import '../../css/i/i3a0h6bxv.css';
import '../../css/o/o30-n5b_h.css';
import '../../css/t/twypbng-u.css';
import '../../css/z/z04drlb1l.css';
import '../../css/k/kla2wdijx.css';
import '../../css/u/ud--d2b1h.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="l3m25tbey"/><path class="cbqe24tlg"/><path class="i3a0h6bxv"/><path class="o30-n5b_h"/><path class="twypbng-u"/><g class="z04drlb1l"><path class="kla2wdijx"/><path class="ud--d2b1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sunrise-over-mountains"} {...others} />);
}

export default Component;
