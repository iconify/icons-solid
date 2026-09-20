import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm4zn8bfo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wm4zn8bfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:eternal-vows-light"} {...others} />);
}

export default Component;
