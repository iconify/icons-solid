import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsh4_td-z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gsh4_td-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:volume-low-outline"} {...others} />);
}

export default Component;
