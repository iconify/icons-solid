import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffet1q63i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ffet1q63i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:git-merge-conflict-line"} {...others} />);
}

export default Component;
