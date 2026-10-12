import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2hxvxboo.css';
import '../../css/u/u9wh36b8p.css';
import '../../css/f/fleaembio.css';
import '../../css/u/u5--a1zno.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v2hxvxboo"/><path class="u9wh36b8p"/><path class="fleaembio"/><path class="u5--a1zno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:house-wifi-duotone"} {...others} />);
}

export default Component;
