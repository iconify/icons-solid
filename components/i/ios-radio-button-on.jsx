import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lalksfbhk.css';
import '../../css/c/cesl7tgnl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lalksfbhk"/><path class="cesl7tgnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-radio-button-on"} {...others} />);
}

export default Component;
