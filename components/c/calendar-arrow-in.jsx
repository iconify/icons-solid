import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlgody0nn.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="vlgody0nn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:calendar-arrow-in"} {...others} />);
}

export default Component;
