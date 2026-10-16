import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ksvxa6cvf.css';
import '../../css/x/x1m55k_fu.css';
import '../../css/d/dvrv5dwsy.css';
import '../../css/z/z28viubrc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ksvxa6cvf"/><path class="x1m55k_fu"/><rect class="dvrv5dwsy"/><path class="z28viubrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:credit-cards"} {...others} />);
}

export default Component;
