import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrymtgikd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rrymtgikd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-letter-v-filled"} {...others} />);
}

export default Component;
