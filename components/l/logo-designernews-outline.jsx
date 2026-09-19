import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8p4fabkp.css';
import '../../css/d/d_g8hik9b.css';
import '../../css/d/d4yobybuy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r8p4fabkp"/><path class="d_g8hik9b"/><path class="d4yobybuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-designernews-outline"} {...others} />);
}

export default Component;
