import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfrw229ma.css';
import '../../css/y/yz4sh9bvv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bfrw229ma"/><path class="yz4sh9bvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-photos"} {...others} />);
}

export default Component;
