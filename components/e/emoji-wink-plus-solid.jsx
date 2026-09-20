import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnjy4wpbq.css';
import '../../css/l/lxrsy8bdk.css';
import '../../css/g/ga3lzib3e.css';
import '../../css/n/njhb20v1u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pnjy4wpbq"/><path class="lxrsy8bdk"/><path class="ga3lzib3e"/><path clip-rule="evenodd" class="njhb20v1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:emoji-wink-plus-solid"} {...others} />);
}

export default Component;
