import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow83bgbqz.css';
import '../../css/p/p0c2m7eex.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ow83bgbqz"/><path class="p0c2m7eex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-information-circle-outline"} {...others} />);
}

export default Component;
