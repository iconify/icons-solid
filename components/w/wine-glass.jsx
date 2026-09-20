import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghvfd6btu.css';
import '../../css/v/vio9gfbpv.css';
import '../../css/g/gu24prbpy.css';
import '../../css/l/lsudu1uhs.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ghvfd6btu"/><path class="vio9gfbpv"/><path class="gu24prbpy"/><path class="lsudu1uhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wine-glass"} {...others} />);
}

export default Component;
