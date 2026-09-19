import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa24fvbdv.css';
import '../../css/f/fd7vi_cbs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xa24fvbdv"/><path class="fd7vi_cbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-browsers-outline"} {...others} />);
}

export default Component;
