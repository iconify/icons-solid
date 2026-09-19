import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwdjy4r4g.css';
import '../../css/c/cgsvaq7sr.css';
import '../../css/a/amuvk0bpt.css';
import '../../css/p/pavit-bsp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lwdjy4r4g"/><path class="cgsvaq7sr"/><path class="amuvk0bpt"/><path class="pavit-bsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:puppeteer"} {...others} />);
}

export default Component;
