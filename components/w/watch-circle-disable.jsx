import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kvqza4r3x.css';
import '../../css/i/ifvwxtb_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kvqza4r3x"/><path class="ifvwxtb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:watch-circle-disable"} {...others} />);
}

export default Component;
