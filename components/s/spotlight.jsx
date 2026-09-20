import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfwfh6omr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mfwfh6omr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:spotlight"} {...others} />);
}

export default Component;
