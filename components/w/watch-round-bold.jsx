import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qel2rxb7z.css';
import '../../css/c/crnjs2bwb.css';
import '../../css/u/ueez6xb7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qel2rxb7z"/><path class="crnjs2bwb"/><path class="ueez6xb7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-round-bold"} {...others} />);
}

export default Component;
