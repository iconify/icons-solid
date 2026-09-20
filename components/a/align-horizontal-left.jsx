import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf3_r800o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yf3_r800o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:align-horizontal-left"} {...others} />);
}

export default Component;
