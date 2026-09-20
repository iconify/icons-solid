import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f25r_yb1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f25r_yb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:dashboard-gauge-2"} {...others} />);
}

export default Component;
