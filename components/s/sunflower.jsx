import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx3jtcboz.css';
import '../../css/l/lu7xmg9vk.css';
import '../../css/w/wd2zr02fe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sx3jtcboz"/><path class="lu7xmg9vk"/><circle class="wd2zr02fe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sunflower"} {...others} />);
}

export default Component;
