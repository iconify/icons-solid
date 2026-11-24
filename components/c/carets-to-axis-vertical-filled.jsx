import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt_n8sqbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kt_n8sqbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:carets-to-axis-vertical-filled"} {...others} />);
}

export default Component;
