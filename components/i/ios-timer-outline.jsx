import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b303i_gmx.css';
import '../../css/s/s70hg-4vd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b303i_gmx"/><path class="s70hg-4vd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-timer-outline"} {...others} />);
}

export default Component;
