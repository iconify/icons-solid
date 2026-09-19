import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv1_o64lj.css';

const viewBox = {"width":1024,"height":1023};
const content = `<path class="jv1_o64lj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:foursquarealt"} {...others} />);
}

export default Component;
