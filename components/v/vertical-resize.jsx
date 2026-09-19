import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q-88mvxik.css';
import '../../css/v/vjocsrbku.css';
import '../../css/f/fdap0sbww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q-88mvxik"/><path class="vjocsrbku"/><path class="fdap0sbww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:vertical-resize"} {...others} />);
}

export default Component;
