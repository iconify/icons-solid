import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow7wuyz2q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ow7wuyz2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:android-favorite-outline"} {...others} />);
}

export default Component;
