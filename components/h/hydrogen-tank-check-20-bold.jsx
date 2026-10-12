import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmp_5zpfe.css';
import '../../css/j/jj7ew2vkc.css';
import '../../css/k/k2ahn_bem.css';
import '../../css/e/e54bjx_0d.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fmp_5zpfe"/><path class="jj7ew2vkc"/><path class="k2ahn_bem"/><path class="e54bjx_0d"/><path class="sh06c0bcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-tank-check-20-bold"} {...others} />);
}

export default Component;
