import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm38_v6rc.css';
import '../../css/v/vvnu2369n.css';
import '../../css/b/bwfceobyr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mm38_v6rc"/><path class="vvnu2369n"/><path class="bwfceobyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-rss-outline"} {...others} />);
}

export default Component;
