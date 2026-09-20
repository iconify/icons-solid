import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn6_se3_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fn6_se3_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:crop-alt-rotate-left"} {...others} />);
}

export default Component;
