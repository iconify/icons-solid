import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jszxh1b0i.css';
import '../../css/x/xrsgy2bxo.css';
import '../../css/f/f7d702b9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="jszxh1b0i"/><path class="xrsgy2bxo"/><path class="f7d702b9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:broadcast-sharp-two-tone"} {...others} />);
}

export default Component;
