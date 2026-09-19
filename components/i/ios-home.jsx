import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etxzxd_fz.css';
import '../../css/e/ezvo8ibdq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="etxzxd_fz"/><path class="ezvo8ibdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-home"} {...others} />);
}

export default Component;
