import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnhd3fn8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lnhd3fn8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:edit-3-ai-fill"} {...others} />);
}

export default Component;
