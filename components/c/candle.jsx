import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqmxrybbc.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1};
const content = `<path class="zqmxrybbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:candle"} {...others} />);
}

export default Component;
