import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydt23sbnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ydt23sbnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cloud-rain-wind-alt"} {...others} />);
}

export default Component;
