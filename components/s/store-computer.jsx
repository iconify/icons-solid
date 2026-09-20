import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxv6qwben.css';
import '../../css/t/tlakrmbbz.css';
import '../../css/r/rnelw49xr.css';
import '../../css/w/w3u--sb6c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jxv6qwben"/><path class="tlakrmbbz"/><path class="rnelw49xr"/><path class="w3u--sb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:store-computer"} {...others} />);
}

export default Component;
