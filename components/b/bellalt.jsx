import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwfqr_0lu.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="vwfqr_0lu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:bellalt"} {...others} />);
}

export default Component;
