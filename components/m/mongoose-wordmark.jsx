import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtiu8tb2k.css';
import '../../css/o/oxin_cb0v.css';
import '../../css/m/mt4ydix1y.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xtiu8tb2k"/><path class="oxin_cb0v"/><path class="mt4ydix1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:mongoose-wordmark"} {...others} />);
}

export default Component;
