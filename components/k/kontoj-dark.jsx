import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlgf8l19l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vlgf8l19l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kontoj-dark"} {...others} />);
}

export default Component;
