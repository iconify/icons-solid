import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpu5q9b-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cpu5q9b-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:venus-and-mars-fill"} {...others} />);
}

export default Component;
