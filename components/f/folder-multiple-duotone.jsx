import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh404cczq.css';
import '../../css/p/p343mol7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wh404cczq"/><path clip-rule="evenodd" class="p343mol7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-multiple-duotone"} {...others} />);
}

export default Component;
