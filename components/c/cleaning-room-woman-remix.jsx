import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynw1a_xpb.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ynw1a_xpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:cleaning-room-woman-remix"} {...others} />);
}

export default Component;
