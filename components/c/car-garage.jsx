import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/foexnebhq.css';
import '../../css/e/e_7r0xb_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="foexnebhq"/><path class="e_7r0xb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:car-garage"} {...others} />);
}

export default Component;
