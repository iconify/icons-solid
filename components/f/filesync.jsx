import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/waf5nr0aw.css';
import '../../css/f/flc22bblw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="waf5nr0aw"/><path class="flc22bblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:filesync"} {...others} />);
}

export default Component;
