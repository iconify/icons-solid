import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glh9vkb1x.css';
import '../../css/u/u1vdsvbke.css';
import '../../css/k/kp08yd09g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="glh9vkb1x"/><path class="u1vdsvbke"/><path class="kp08yd09g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-academic-cap-2-bold"} {...others} />);
}

export default Component;
