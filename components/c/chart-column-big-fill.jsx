import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-_a2ccer.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-_a2ccer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chart-column-big-fill"} {...others} />);
}

export default Component;
