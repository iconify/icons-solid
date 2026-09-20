import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i36yhsbpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i36yhsbpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:to-do-line"} {...others} />);
}

export default Component;
