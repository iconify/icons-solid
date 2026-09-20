import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8y5cubeq.css';
import '../../css/b/bo1-45bhy.css';
import '../../css/z/z343t6ynq.css';
import '../../css/m/mm-sol1bo.css';
import '../../css/a/al12e2btd.css';
import '../../css/a/a5m1-4_cu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z8y5cubeq"/><path class="bo1-45bhy"/><path class="z343t6ynq"/><path class="mm-sol1bo"/><path class="al12e2btd"/><path class="a5m1-4_cu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radio-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
