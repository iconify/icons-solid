import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtnmxtimz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xtnmxtimz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:smartphone-play"} {...others} />);
}

export default Component;
