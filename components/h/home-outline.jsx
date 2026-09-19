import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4tob8bkg.css';
import '../../css/p/p4bqiyolx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w4tob8bkg"/><path class="p4bqiyolx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:home-outline"} {...others} />);
}

export default Component;
