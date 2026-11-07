import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgx80dbgw.css';
import '../../css/s/sf0e3noev.css';
import '../../css/z/zmpjdkihd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cgx80dbgw"/><path clip-rule="evenodd" class="sf0e3noev"/><path clip-rule="evenodd" class="zmpjdkihd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-minimalistic-2-outline"} {...others} />);
}

export default Component;
