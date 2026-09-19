import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh34l6hzf.css';
import '../../css/q/qgp7_3b3s.css';
import '../../css/l/lwo1bn0tv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="wh34l6hzf"/><path class="qgp7_3b3s"/><path class="lwo1bn0tv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:web3js"} {...others} />);
}

export default Component;
