import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm99dfc3e.css';
import '../../css/c/cvyd4hdhk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tm99dfc3e"/><path class="cvyd4hdhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-down-bold-duotone"} {...others} />);
}

export default Component;
