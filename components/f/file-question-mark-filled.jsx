import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1pb52z0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m1pb52z0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-question-mark-filled"} {...others} />);
}

export default Component;
