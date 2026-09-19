import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bas7btrby.css';
import '../../css/x/x7m723b_z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bas7btrby"/><path class="x7m723b_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-speedometer-outline"} {...others} />);
}

export default Component;
