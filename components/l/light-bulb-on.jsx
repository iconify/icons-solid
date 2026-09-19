import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_2q0_01r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_2q0_01r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:light-bulb-on"} {...others} />);
}

export default Component;
