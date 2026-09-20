import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlzy0nb1j.css';
import '../../css/n/n32zg0b1z.css';
import '../../css/u/ugcydkb1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xlzy0nb1j"/><circle class="n32zg0b1z"/><path class="ugcydkb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:warning-outline"} {...others} />);
}

export default Component;
