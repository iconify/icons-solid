import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/drxkd2_9v.css';
import '../../css/a/altvz6bon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="drxkd2_9v"/><path class="altvz6bon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-centerline-dashed-vertical"} {...others} />);
}

export default Component;
