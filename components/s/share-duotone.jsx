import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnwldwb2b.css';
import '../../css/n/nuq19qbcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fnwldwb2b"/><path clip-rule="evenodd" class="nuq19qbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:share-duotone"} {...others} />);
}

export default Component;
