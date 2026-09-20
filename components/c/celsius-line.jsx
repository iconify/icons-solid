import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n29yr30op.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n29yr30op"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:celsius-line"} {...others} />);
}

export default Component;
