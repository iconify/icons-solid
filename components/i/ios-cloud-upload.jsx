import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2vigwbeq.css';
import '../../css/j/jwwa9k2ew.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g2vigwbeq"/><path class="jwwa9k2ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-cloud-upload"} {...others} />);
}

export default Component;
