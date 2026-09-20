import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dtetowqlz.css';
import '../../css/q/q01rp0b1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dtetowqlz"/><path class="q01rp0b1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:navigation-menu-horizontal-1"} {...others} />);
}

export default Component;
