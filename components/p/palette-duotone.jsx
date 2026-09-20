import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smaug663i.css';
import '../../css/x/xkees3b5w.css';
import '../../css/l/l-16bmb_h.css';
import '../../css/l/lz06rnbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="smaug663i"/><path class="xkees3b5w"/><path class="l-16bmb_h"/><path class="lz06rnbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:palette-duotone"} {...others} />);
}

export default Component;
