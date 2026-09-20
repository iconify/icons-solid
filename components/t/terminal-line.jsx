import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-5j1ab6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-5j1ab6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:terminal-line"} {...others} />);
}

export default Component;
