import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wptum8b_n.css';
import '../../css/x/x7spcd5gw.css';
import '../../css/r/r_u2rg8xx.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="wptum8b_n"/><path class="x7spcd5gw"/><path class="r_u2rg8xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:website"} {...others} />);
}

export default Component;
