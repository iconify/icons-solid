import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpj0hbcby.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wpj0hbcby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:headphones-outline"} {...others} />);
}

export default Component;
