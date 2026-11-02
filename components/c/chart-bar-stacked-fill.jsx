import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqcf3038h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vqcf3038h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chart-bar-stacked-fill"} {...others} />);
}

export default Component;
