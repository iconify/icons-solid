import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nw5qx8bci.css';

const viewBox = {"width":2304,"height":1536};
const content = `<path class="nw5qx8bci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:credit-card-alt"} {...others} />);
}

export default Component;
