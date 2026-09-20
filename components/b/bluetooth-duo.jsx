import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/w/wl8o0dkgp.css';
import '../../css/f/fvd8e8bcz.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="wl8o0dkgp"/><path class="fvd8e8bcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:bluetooth-duo"} {...others} />);
}

export default Component;
