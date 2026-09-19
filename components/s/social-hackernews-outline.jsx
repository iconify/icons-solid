import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bycj2bqiy.css';
import '../../css/n/nfo4jpdxh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bycj2bqiy"/><path class="nfo4jpdxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-hackernews-outline"} {...others} />);
}

export default Component;
