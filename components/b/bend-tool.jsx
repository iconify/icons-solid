import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pyd8uurcz.css';
import '../../css/i/i7327t3bx.css';
import '../../css/g/gtqacwbfg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="pyd8uurcz"/><circle class="i7327t3bx"/><path class="gtqacwbfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bend-tool"} {...others} />);
}

export default Component;
