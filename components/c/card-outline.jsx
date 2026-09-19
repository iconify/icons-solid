import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhua3e2df.css';
import '../../css/x/x7_z8lltl.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="fhua3e2df"/><path class="x7_z8lltl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:card-outline"} {...others} />);
}

export default Component;
