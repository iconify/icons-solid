import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqcne8d0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sqcne8d0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:candlestick-chart"} {...others} />);
}

export default Component;
