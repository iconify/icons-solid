import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmo-gj4um.css';
import '../../css/t/t0j6e-buy.css';
import '../../css/y/y00054bdm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wmo-gj4um"/><path class="t0j6e-buy"/><path class="y00054bdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dryer-20-bold"} {...others} />);
}

export default Component;
