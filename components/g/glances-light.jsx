import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qh9rm7b0l.css';
import '../../css/f/ffaju1aty.css';
import '../../css/d/dz903luew.css';
import '../../css/z/z4oyh2bwl.css';
import '../../css/s/s0bjnspys.css';

const viewBox = {"width":466,"height":513};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qh9rm7b0l"/><path clip-rule="evenodd" class="ffaju1aty"/><path clip-rule="evenodd" class="dz903luew"/><path clip-rule="evenodd" class="z4oyh2bwl"/><path class="s0bjnspys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:glances-light"} {...others} />);
}

export default Component;
