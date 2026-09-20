import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz7wb2t7x.css';
import '../../css/v/vza9gr8cj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fz7wb2t7x"/><path class="vza9gr8cj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:maildev"} {...others} />);
}

export default Component;
