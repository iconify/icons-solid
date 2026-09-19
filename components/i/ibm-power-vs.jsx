import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt7kujbfp.css';
import '../../css/i/is8a1duci.css';
import '../../css/v/vh1dgbcue.css';
import '../../css/m/m1y4hsbgq.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/l/l3v-u6t6g.css';
import '../../css/z/zko2vubei.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bt7kujbfp"/><circle class="is8a1duci"/><circle class="vh1dgbcue"/><circle class="m1y4hsbgq"/><circle class="e39ud6bwf"/><circle class="l3v-u6t6g"/><path class="zko2vubei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-power-vs"} {...others} />);
}

export default Component;
