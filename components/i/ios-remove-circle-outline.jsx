import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tafn66doy.css';
import '../../css/l/lalksfbhk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tafn66doy"/><path class="lalksfbhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-remove-circle-outline"} {...others} />);
}

export default Component;
