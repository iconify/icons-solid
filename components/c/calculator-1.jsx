import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o07-fmbia.css';
import '../../css/d/dj359ydno.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="o07-fmbia"/><path class="dj359ydno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:calculator-1"} {...others} />);
}

export default Component;
