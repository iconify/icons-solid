import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9q1o1tfj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z9q1o1tfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:low-temperature-fill"} {...others} />);
}

export default Component;
