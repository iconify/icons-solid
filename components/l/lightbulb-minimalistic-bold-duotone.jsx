import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht2yptqqj.css';
import '../../css/j/j5ldtz0xa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ht2yptqqj"/><path clip-rule="evenodd" class="j5ldtz0xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lightbulb-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
