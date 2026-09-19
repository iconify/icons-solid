import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cbt3z_bte.css';
import '../../css/p/p--54x55y.css';
import '../../css/s/sl4-7z0-g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="cbt3z_bte"/><path class="p--54x55y"/><path class="sl4-7z0-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:leaf-fluttering-in-wind"} {...others} />);
}

export default Component;
