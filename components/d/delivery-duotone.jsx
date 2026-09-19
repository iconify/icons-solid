import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kyyysb_sg.css';
import '../../css/w/w48ql80_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kyyysb_sg"/><path class="w48ql80_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:delivery-duotone"} {...others} />);
}

export default Component;
