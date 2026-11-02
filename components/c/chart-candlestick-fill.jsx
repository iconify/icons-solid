import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckohrz7gm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ckohrz7gm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chart-candlestick-fill"} {...others} />);
}

export default Component;
