import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t4zl0rbtk.css';
import '../../css/v/vx8uhjbtk.css';
import '../../css/h/hqyg-9bir.css';
import '../../css/p/p0q2sxjnz.css';
import '../../css/u/ugzrm7bka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="t4zl0rbtk"/><path class="vx8uhjbtk wm-shine"/><path class="hqyg-9bir wm-k"/><path class="p0q2sxjnz wm-a"/><path class="ugzrm7bka wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:traffic-light"} {...others} />);
}

export default Component;
