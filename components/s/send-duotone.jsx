import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3s5wzb5x.css';
import '../../css/o/o9eo1e7xa.css';
import '../../css/v/v-0f67bvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e3s5wzb5x"/><path class="o9eo1e7xa"/><path class="v-0f67bvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:send-duotone"} {...others} />);
}

export default Component;
