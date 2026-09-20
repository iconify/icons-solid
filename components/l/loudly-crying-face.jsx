import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qn-uldwsp.css';
import '../../css/s/s35tz368t.css';
import '../../css/v/vo7mfybzy.css';
import '../../css/c/ca1jkw6hv.css';
import '../../css/x/xrzzui85k.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/u/uqwoj-qze.css';
import '../../css/w/wplkh7x2z.css';
import '../../css/z/z9ter3zrr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qn-uldwsp"/><path class="s35tz368t"/><path class="vo7mfybzy"/><path class="ca1jkw6hv"/><path class="xrzzui85k"/><g class="brzn_0bpr"><path class="uqwoj-qze"/><circle class="wplkh7x2z"/><circle class="z9ter3zrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:loudly-crying-face"} {...others} />);
}

export default Component;
