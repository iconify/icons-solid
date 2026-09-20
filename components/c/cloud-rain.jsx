import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itg833o_w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="itg833o_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cloud-rain"} {...others} />);
}

export default Component;
