import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/now_6ismn.css';
import '../../css/q/q7s1dob3p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="now_6ismn"/><path class="q7s1dob3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:truck-electric-filled"} {...others} />);
}

export default Component;
