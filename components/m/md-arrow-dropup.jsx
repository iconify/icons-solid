import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr0vp1bbm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cr0vp1bbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-arrow-dropup"} {...others} />);
}

export default Component;
