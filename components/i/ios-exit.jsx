import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmzuscc9w.css';
import '../../css/o/oynddubhd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fmzuscc9w"/><path class="oynddubhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-exit"} {...others} />);
}

export default Component;
