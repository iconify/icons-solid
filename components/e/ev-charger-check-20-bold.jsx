import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu1cxf05y.css';
import '../../css/w/w1th29omc.css';
import '../../css/n/n02nodbdf.css';
import '../../css/d/dj13czevu.css';
import '../../css/a/amxn85gtp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qu1cxf05y"/><path class="w1th29omc"/><path class="n02nodbdf"/><path class="dj13czevu"/><path class="amxn85gtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-check-20-bold"} {...others} />);
}

export default Component;
