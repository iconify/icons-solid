import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-oq9ybmx.css';
import '../../css/w/wk8pa9buv.css';
import '../../css/r/r5euffbjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w-oq9ybmx"/><path class="wk8pa9buv"/><path class="r5euffbjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:trees-duotone"} {...others} />);
}

export default Component;
