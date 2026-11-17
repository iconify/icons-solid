import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epvlj5hbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="epvlj5hbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-axis-dashed-vertical"} {...others} />);
}

export default Component;
