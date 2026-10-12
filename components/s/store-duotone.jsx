import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1wyuju3y.css';
import '../../css/v/vklcjt5rj.css';
import '../../css/t/t_62qsbfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p1wyuju3y"/><path class="vklcjt5rj"/><path class="t_62qsbfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:store-duotone"} {...others} />);
}

export default Component;
