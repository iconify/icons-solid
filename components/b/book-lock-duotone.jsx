import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zt644gbrq.css';
import '../../css/d/dte82obhh.css';
import '../../css/a/a1zyeqbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zt644gbrq"/><path class="dte82obhh"/><path class="a1zyeqbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-lock-duotone"} {...others} />);
}

export default Component;
