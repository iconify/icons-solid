import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6f34bfwl.css';
import '../../css/p/pgrv-bcfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w6f34bfwl"/><path clip-rule="evenodd" class="pgrv-bcfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:unlock-outline"} {...others} />);
}

export default Component;
