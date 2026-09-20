import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbr5r4bmd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fbr5r4bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rancher-submariner-dark"} {...others} />);
}

export default Component;
