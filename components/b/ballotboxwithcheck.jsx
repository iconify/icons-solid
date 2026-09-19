import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we2zcubci.css';
import '../../css/h/h2_h-ebiv.css';
import '../../css/k/klvmpvknr.css';
import '../../css/s/sz2abxk9o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="we2zcubci"/><path class="h2_h-ebiv"/><path class="klvmpvknr"/><path class="sz2abxk9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ballotboxwithcheck"} {...others} />);
}

export default Component;
