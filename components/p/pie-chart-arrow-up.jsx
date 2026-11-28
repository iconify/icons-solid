import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtse6qx-y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rtse6qx-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:pie-chart-arrow-up"} {...others} />);
}

export default Component;
