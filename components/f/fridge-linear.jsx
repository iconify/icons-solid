import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l9x_x5b4e.css';
import '../../css/c/c7zikwrvh.css';
import '../../css/f/f08krvjen.css';
import '../../css/x/xc_fo9bdv.css';
import '../../css/f/f26ggybga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l9x_x5b4e"/><path class="c7zikwrvh"/><path class="f08krvjen"/><path class="xc_fo9bdv"/><path class="f26ggybga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fridge-linear"} {...others} />);
}

export default Component;
