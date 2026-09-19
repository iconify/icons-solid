import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lu312zpbh.css';
import '../../css/e/e5wxxab2j.css';
import '../../css/g/garbl4k2i.css';
import '../../css/x/xy6fdrbaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lu312zpbh"/><path class="e5wxxab2j"/><path class="garbl4k2i"/><path class="xy6fdrbaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:discount-duotone"} {...others} />);
}

export default Component;
