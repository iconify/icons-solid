import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f78g2-ujg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f78g2-ujg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:smartphone-alert"} {...others} />);
}

export default Component;
