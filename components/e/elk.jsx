import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg48uhzxf.css';
import '../../css/i/i-gh0uunf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dg48uhzxf"/><path class="i-gh0uunf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:elk"} {...others} />);
}

export default Component;
