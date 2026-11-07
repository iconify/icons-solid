import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-4tj5bwa.css';
import '../../css/x/x7-wb_rwz.css';
import '../../css/c/ctjzn5myy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p-4tj5bwa"/><path class="x7-wb_rwz"/><path class="ctjzn5myy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-3-bold-duotone"} {...others} />);
}

export default Component;
