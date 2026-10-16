import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwtlcbcgl.css';
import '../../css/c/cbw46ub7s.css';

const viewBox = {"width":298.961,"height":300};
const content = `<path class="pwtlcbcgl"/><path class="cbw46ub7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tautulli"} {...others} />);
}

export default Component;
