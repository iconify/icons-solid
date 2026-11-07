import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn_frcb-c.css';
import '../../css/z/z2e46e6lb.css';
import '../../css/k/k03lqnb1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jn_frcb-c"/><path class="z2e46e6lb"/><path class="k03lqnb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:eraser-square-bold-duotone"} {...others} />);
}

export default Component;
