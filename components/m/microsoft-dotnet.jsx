import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lf0becbdq.css';
import '../../css/m/muxlfbbte.css';

const viewBox = {"width":456,"height":456};
const content = `<g class="ft5dv1b6b"><path class="lf0becbdq"/><path class="muxlfbbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:microsoft-dotnet"} {...others} />);
}

export default Component;
