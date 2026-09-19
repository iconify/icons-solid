import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx_um_bgw.css';
import '../../css/w/w1n9wrt_a.css';
import '../../css/g/genqieb0u.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="nx_um_bgw"/><path class="w1n9wrt_a"/><path class="genqieb0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:wolfram"} {...others} />);
}

export default Component;
