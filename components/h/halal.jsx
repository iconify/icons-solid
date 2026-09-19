import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/neydl-b0h.css';
import '../../css/r/rwv7d3bso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="neydl-b0h"/><path class="rwv7d3bso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:halal"} {...others} />);
}

export default Component;
