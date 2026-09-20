import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfqdlls5m.css';
import '../../css/u/uhxg3ozyr.css';

const viewBox = {"width":250,"height":250};
const content = `<path class="nfqdlls5m"/><path class="uhxg3ozyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:charles-schwab"} {...others} />);
}

export default Component;
