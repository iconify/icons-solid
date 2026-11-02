import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7it0ybmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p7it0ybmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:snowstorm-2-line"} {...others} />);
}

export default Component;
