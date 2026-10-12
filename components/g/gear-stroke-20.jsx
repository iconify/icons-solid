import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jow4vojth.css';
import '../../css/k/k3_q2gqev.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jow4vojth"/><path class="k3_q2gqev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:gear-stroke-20"} {...others} />);
}

export default Component;
