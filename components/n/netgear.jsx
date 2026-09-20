import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_mglgxaq.css';
import '../../css/p/p-_y-_-ic.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j_mglgxaq"/><path class="p-_y-_-ic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:netgear"} {...others} />);
}

export default Component;
