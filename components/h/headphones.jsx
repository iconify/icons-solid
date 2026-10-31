import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/et2-czbrx.css';
import '../../css/l/lz5s0hb8v.css';
import '../../css/l/ltpyfabni.css';
import '../../css/r/r0v6itbzy.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="et2-czbrx"/><path class="lz5s0hb8v wm-shine"/><path class="ltpyfabni wm-k"/><path class="r0v6itbzy wm-a"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:headphones"} {...others} />);
}

export default Component;
