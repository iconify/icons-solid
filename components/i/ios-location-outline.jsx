import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs68a2a3q.css';
import '../../css/c/cb56blb8w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gs68a2a3q"/><path class="cb56blb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-location-outline"} {...others} />);
}

export default Component;
