import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/ndll2q8nj.css';
import '../../css/m/mksrw49tu.css';
import '../../css/p/pqa7-vkgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ndll2q8nj wm-k"/><path class="mksrw49tu wm-a"/><path class="pqa7-vkgw wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:language"} {...others} />);
}

export default Component;
