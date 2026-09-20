import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmf1tu78z.css';
import '../../css/p/pc6urubdx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nmf1tu78z"/><path class="pc6urubdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:settings-5-line"} {...others} />);
}

export default Component;
