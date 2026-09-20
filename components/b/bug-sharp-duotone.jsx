import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/d67d1o37r.css';
import '../../css/n/nbgaetwkj.css';
import '../../css/i/ix6zqj6-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="d67d1o37r"/><path class="nbgaetwkj"/><path clip-rule="evenodd" class="ix6zqj6-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bug-sharp-duotone"} {...others} />);
}

export default Component;
