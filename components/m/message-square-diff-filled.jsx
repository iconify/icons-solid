import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sc7v2ekmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sc7v2ekmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:message-square-diff-filled"} {...others} />);
}

export default Component;
