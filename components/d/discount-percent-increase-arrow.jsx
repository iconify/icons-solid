import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1cp0nbej.css';
import '../../css/e/em0p01pxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1cp0nbej"/><path class="em0p01pxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:discount-percent-increase-arrow"} {...others} />);
}

export default Component;
