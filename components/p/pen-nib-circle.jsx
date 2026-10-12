import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc7tncoag.css';
import '../../css/g/gwkmarbyu.css';
import '../../css/y/ymtmr1bse.css';
import '../../css/w/wwnm71-zg.css';
import '../../css/e/e173c5bzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sc7tncoag"/><path class="gwkmarbyu"/><path class="ymtmr1bse"/><path class="wwnm71-zg"/><path class="e173c5bzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pen-nib-circle"} {...others} />);
}

export default Component;
