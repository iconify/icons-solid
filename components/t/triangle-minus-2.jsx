import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sob9rmb_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sob9rmb_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:triangle-minus-2"} {...others} />);
}

export default Component;
