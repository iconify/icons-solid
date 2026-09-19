import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fcl9oyb8g.css';
import '../../css/t/tr2mh5bib.css';
import '../../css/e/e2-scldvg.css';
import '../../css/c/cfrpk4bcs.css';
import '../../css/s/s0dxqr3rf.css';
import '../../css/y/yb58nm4vj.css';
import '../../css/o/o2nepmb8r.css';
import '../../css/j/j__rpmbcv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="fcl9oyb8g"/><path class="tr2mh5bib"/><path class="e2-scldvg"/><path class="cfrpk4bcs"/><path class="s0dxqr3rf"/><path class="yb58nm4vj"/><path class="o2nepmb8r"/><path class="j__rpmbcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:scorpion"} {...others} />);
}

export default Component;
