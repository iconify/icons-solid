import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qbwrbmb3k.css';
import '../../css/k/kil06obbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="qbwrbmb3k"/><path class="kil06obbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:podcast-sharp-fill"} {...others} />);
}

export default Component;
