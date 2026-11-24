import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt_jtyb9o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vt_jtyb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-off-filled"} {...others} />);
}

export default Component;
