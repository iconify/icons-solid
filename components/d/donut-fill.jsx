import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr8y-6-3j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kr8y-6-3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:donut-fill"} {...others} />);
}

export default Component;
