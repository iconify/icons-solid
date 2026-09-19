import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m2zya9vwm.css';
import '../../css/e/ermcdhbic.css';
import '../../css/w/wdxk95bqv.css';
import '../../css/a/a11ka0e9d.css';
import '../../css/x/xluvpbbtt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="m2zya9vwm"/><path class="ermcdhbic"/><path class="wdxk95bqv"/><path class="a11ka0e9d"/><path class="xluvpbbtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baby-bottle"} {...others} />);
}

export default Component;
