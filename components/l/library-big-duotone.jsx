import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ihe_8ubmh.css';
import '../../css/j/jfxb75zwt.css';
import '../../css/t/thtwgkblz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ihe_8ubmh"/><path class="jfxb75zwt"/><path class="thtwgkblz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:library-big-duotone"} {...others} />);
}

export default Component;
