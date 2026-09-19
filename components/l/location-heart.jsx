import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjvt0lfrb.css';
import '../../css/n/nu2_-nbje.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hjvt0lfrb"/><path class="nu2_-nbje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:location-heart"} {...others} />);
}

export default Component;
