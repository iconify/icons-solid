import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfe5vbjgh.css';
import '../../css/t/trve6st6p.css';
import '../../css/n/nhh73dlgl.css';
import '../../css/v/v69_xkqfn.css';
import '../../css/i/i8w8of8xy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jfe5vbjgh"/><path clip-rule="evenodd" class="trve6st6p"/><path clip-rule="evenodd" class="nhh73dlgl"/><path clip-rule="evenodd" class="v69_xkqfn"/><path class="i8w8of8xy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:parliament-flat"} {...others} />);
}

export default Component;
