import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgejto_9f.css';
import '../../css/b/bhhme_0me.css';
import '../../css/d/dg3r1tbgl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="zgejto_9f"/><path class="bhhme_0me"/><path class="dg3r1tbgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:signal-tower-duo"} {...others} />);
}

export default Component;
