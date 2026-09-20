import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k29omfbdq.css';
import '../../css/v/v0quseb4u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k29omfbdq"/><path clip-rule="evenodd" class="v0quseb4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:ellipsis-v-duotone"} {...others} />);
}

export default Component;
