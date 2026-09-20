import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oi11_7bsu.css';
import '../../css/s/sxfxf1bmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="oi11_7bsu"/><path class="sxfxf1bmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:trip-pin-multiple"} {...others} />);
}

export default Component;
