import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d81la6ttu.css';
import '../../css/a/akq5k-bfd.css';
import '../../css/e/ep5elvgxd.css';
import '../../css/y/yk9rowbie.css';
import '../../css/t/t4nmx7b6q.css';
import '../../css/u/ummndzb8m.css';
import '../../css/a/aw4f21ypz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d81la6ttu wm-k"/><path class="akq5k-bfd wm-deco"/><path class="ep5elvgxd wm-k"/><path class="wm-k yk9rowbie"/><path class="t4nmx7b6q wm-shadow"/><path class="ummndzb8m wm-shine"/><path class="aw4f21ypz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:dholak"} {...others} />);
}

export default Component;
