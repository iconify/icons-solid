import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2l0kbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t_2l0kbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-axis-dashed-horizontal"} {...others} />);
}

export default Component;
