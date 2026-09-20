import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn7t-fbvk.css';
import '../../css/l/ll5_hob1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bn7t-fbvk"/><path clip-rule="evenodd" class="ll5_hob1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-arrow-left"} {...others} />);
}

export default Component;
