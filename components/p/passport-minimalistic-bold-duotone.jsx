import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljtilgcpm.css';
import '../../css/q/qmefr1b9h.css';
import '../../css/h/hsyg8kbzj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ljtilgcpm"/><path clip-rule="evenodd" class="qmefr1b9h"/><path class="hsyg8kbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:passport-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
