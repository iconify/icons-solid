import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2k757bsm.css';
import '../../css/p/p3xr9ebyn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v2k757bsm"/><path clip-rule="evenodd" class="p3xr9ebyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:drumkit-24"} {...others} />);
}

export default Component;
