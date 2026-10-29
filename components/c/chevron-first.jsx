import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwc28duwl.css';
import '../../css/p/p0vvxskvk.css';
import '../../css/r/r51vm3woy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pwc28duwl wm-k"/><path class="p0vvxskvk wm-k"/><path class="r51vm3woy wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chevron-first"} {...others} />);
}

export default Component;
