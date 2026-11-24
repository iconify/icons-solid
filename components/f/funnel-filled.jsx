import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_slqp4cj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f_slqp4cj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:funnel-filled"} {...others} />);
}

export default Component;
