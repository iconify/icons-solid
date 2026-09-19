import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxsdmsp1w.css';
import '../../css/u/ukqxhebfj.css';
import '../../css/u/u0r3q2bse.css';
import '../../css/j/jxyv579ex.css';
import '../../css/p/phxuvwk1e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dxsdmsp1w"/><rect class="ukqxhebfj"/><rect class="u0r3q2bse"/><rect class="jxyv579ex"/><rect class="phxuvwk1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:barbell-outline"} {...others} />);
}

export default Component;
