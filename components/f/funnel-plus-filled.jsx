import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3e-_2bze.css';
import '../../css/n/n6-kt6b9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l3e-_2bze"/><path class="n6-kt6b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:funnel-plus-filled"} {...others} />);
}

export default Component;
