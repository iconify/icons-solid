import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gxlp_5bsv.css';
import '../../css/n/n3uohw5yd.css';
import '../../css/t/tu7xbzh8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gxlp_5bsv"/><path class="n3uohw5yd"/><path clip-rule="evenodd" class="tu7xbzh8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:phone-vibrate-duotone"} {...others} />);
}

export default Component;
