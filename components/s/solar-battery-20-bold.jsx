import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wht6-eeil.css';
import '../../css/y/y3tufnbaa.css';
import '../../css/c/cw-o4ybrh.css';
import '../../css/k/kj4pd_xxo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wht6-eeil"/><path class="y3tufnbaa"/><path class="cw-o4ybrh"/><path class="kj4pd_xxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-battery-20-bold"} {...others} />);
}

export default Component;
