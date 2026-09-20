import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nw1ycublj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nw1ycublj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:buromobelexperte"} {...others} />);
}

export default Component;
