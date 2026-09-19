import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xkzigccsu.css';
import '../../css/j/jycvhms3v.css';
import '../../css/f/farndtbyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xkzigccsu"/><path class="jycvhms3v"/><path class="farndtbyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flip-horizontal2"} {...others} />);
}

export default Component;
