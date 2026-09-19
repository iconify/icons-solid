import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9vaa1ezk.css';
import '../../css/n/nidir5bxi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b9vaa1ezk"/><path class="nidir5bxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-bell"} {...others} />);
}

export default Component;
