import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9k5qybjm.css';
import '../../css/v/vjhtv-b4n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f9k5qybjm"/><path class="vjhtv-b4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:newspaper"} {...others} />);
}

export default Component;
