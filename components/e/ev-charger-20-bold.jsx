import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pi1hn-gpe.css';
import '../../css/q/qln6u-bog.css';
import '../../css/n/n02nodbdf.css';
import '../../css/o/okxkqqbnp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pi1hn-gpe"/><path class="qln6u-bog"/><path class="n02nodbdf"/><path class="okxkqqbnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-20-bold"} {...others} />);
}

export default Component;
