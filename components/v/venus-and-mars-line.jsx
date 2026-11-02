import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3e5qfvtr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p3e5qfvtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:venus-and-mars-line"} {...others} />);
}

export default Component;
