import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnnw44bzb.css';
import '../../css/q/q810p6bpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vnnw44bzb"/><path class="q810p6bpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:reading-time-duotone"} {...others} />);
}

export default Component;
