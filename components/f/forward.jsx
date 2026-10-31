import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bykj-8ldy.css';
import '../../css/e/e7970wbtu.css';
import '../../css/e/e78k15v9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bykj-8ldy wm-k"/><path class="e7970wbtu wm-a"/><path class="e78k15v9f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:forward"} {...others} />);
}

export default Component;
