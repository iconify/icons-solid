import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybwzvccuq.css';
import '../../css/o/ozud7nbis.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ybwzvccuq"/><path class="ozud7nbis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:chevron-forward-circle-outline"} {...others} />);
}

export default Component;
