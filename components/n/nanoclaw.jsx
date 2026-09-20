import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn77a-bgw.css';
import '../../css/i/ipbi0zqsr.css';
import '../../css/f/fgp57luau.css';
import '../../css/h/hbufu4b4q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wn77a-bgw"/><path class="ipbi0zqsr"/><path class="fgp57luau"/><path class="hbufu4b4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nanoclaw"} {...others} />);
}

export default Component;
