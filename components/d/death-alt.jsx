import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m058yjboy.css';
import '../../css/l/lpf31_i2c.css';
import '../../css/e/e7ui7sb9w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m058yjboy"/><path class="lpf31_i2c"/><path clip-rule="evenodd" class="e7ui7sb9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:death-alt"} {...others} />);
}

export default Component;
