import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ioyychypw.css';
import '../../css/a/ahrqr1byw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ioyychypw"/><path class="ahrqr1byw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-chatbubbles"} {...others} />);
}

export default Component;
