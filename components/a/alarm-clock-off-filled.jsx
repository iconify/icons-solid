import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/weapb9upb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="weapb9upb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:alarm-clock-off-filled"} {...others} />);
}

export default Component;
