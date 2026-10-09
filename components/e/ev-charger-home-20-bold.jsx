import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awwur6tzl.css';
import '../../css/l/l9ao81bdv.css';
import '../../css/x/xfmnipbdx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="awwur6tzl"/><path class="l9ao81bdv"/><path class="xfmnipbdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-home-20-bold"} {...others} />);
}

export default Component;
