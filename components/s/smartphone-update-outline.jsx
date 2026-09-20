import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_8sl_z9w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q_8sl_z9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-update-outline"} {...others} />);
}

export default Component;
