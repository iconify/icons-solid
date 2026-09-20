import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s35baj69w.css';
import '../../css/x/xcy1aj_aa.css';
import '../../css/q/q_pr2wbay.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s35baj69w"/><path class="xcy1aj_aa"/><path class="q_pr2wbay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:money-payments-calculator-app"} {...others} />);
}

export default Component;
