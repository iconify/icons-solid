import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njswg3bpu.css';
import '../../css/v/v_g5t0bgt.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="njswg3bpu"/><path class="v_g5t0bgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:hole"} {...others} />);
}

export default Component;
