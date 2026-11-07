import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbykibczi.css';
import '../../css/f/fm67_nbcb.css';
import '../../css/r/r7elkeb0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xbykibczi"/><path class="fm67_nbcb"/><path class="r7elkeb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-minimalistic-2-outline"} {...others} />);
}

export default Component;
