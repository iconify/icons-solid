import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtt7155uo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rtt7155uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:equipment-gym-03"} {...others} />);
}

export default Component;
