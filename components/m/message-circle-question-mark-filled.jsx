import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z59x0ffla.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z59x0ffla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:message-circle-question-mark-filled"} {...others} />);
}

export default Component;
