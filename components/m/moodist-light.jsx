import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxa3dwbbr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xxa3dwbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:moodist-light"} {...others} />);
}

export default Component;
