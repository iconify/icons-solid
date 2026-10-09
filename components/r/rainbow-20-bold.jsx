import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwm1rebcn.css';
import '../../css/v/vc21ghbwp.css';
import '../../css/n/nfrz65yag.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nwm1rebcn"/><path class="vc21ghbwp"/><path class="nfrz65yag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rainbow-20-bold"} {...others} />);
}

export default Component;
