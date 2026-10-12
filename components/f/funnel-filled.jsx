import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj2x0ebtf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qj2x0ebtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:funnel-filled"} {...others} />);
}

export default Component;
