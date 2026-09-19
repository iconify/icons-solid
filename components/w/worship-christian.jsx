import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a97m5wlzi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a97m5wlzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:worship-christian"} {...others} />);
}

export default Component;
