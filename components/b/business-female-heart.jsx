import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/w5197-byv.css';
import '../../css/b/bx2rfcc2d.css';
import '../../css/m/mp4vgo5lb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="w5197-byv"/><path class="bx2rfcc2d"/><path class="mp4vgo5lb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-female-heart"} {...others} />);
}

export default Component;
