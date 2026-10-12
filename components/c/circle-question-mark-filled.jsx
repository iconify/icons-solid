import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oal6mpb4h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oal6mpb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-question-mark-filled"} {...others} />);
}

export default Component;
