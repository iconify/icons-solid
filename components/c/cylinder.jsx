import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w0m-g8biv.css';
import '../../css/x/x5664ibis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="w0m-g8biv"/><path class="x5664ibis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cylinder"} {...others} />);
}

export default Component;
