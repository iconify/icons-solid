import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt6oa8btc.css';
import '../../css/n/n2b3ufqkh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vt6oa8btc"/><path class="n2b3ufqkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-pause"} {...others} />);
}

export default Component;
