import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flls6lbhx.css';
import '../../css/j/jatm2wbdf.css';
import '../../css/d/dmqo6kbhf.css';
import '../../css/i/i-m48ibfa.css';
import '../../css/h/hr14dobvu.css';
import '../../css/s/sp_bsk30y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="flls6lbhx"/><path class="jatm2wbdf"/><path class="dmqo6kbhf"/><path class="i-m48ibfa"/><path class="hr14dobvu"/><path class="sp_bsk30y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cocktailglass"} {...others} />);
}

export default Component;
