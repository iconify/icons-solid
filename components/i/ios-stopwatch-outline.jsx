import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt3z6yb7q.css';
import '../../css/m/m635pzbjq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bt3z6yb7q"/><path class="m635pzbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-stopwatch-outline"} {...others} />);
}

export default Component;
