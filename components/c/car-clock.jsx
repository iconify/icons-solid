import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj2hj6ivg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yj2hj6ivg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:car-clock"} {...others} />);
}

export default Component;
