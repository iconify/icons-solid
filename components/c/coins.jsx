import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nm35hkg8r.css';
import '../../css/q/q8m1dzbvs.css';
import '../../css/i/i09w7nb-z.css';
import '../../css/e/ecv-79qom.css';
import '../../css/s/so3y5m2lo.css';
import '../../css/o/o3dwf9wyo.css';
import '../../css/m/md6hahb5s.css';
import '../../css/g/g3-i5tpqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nm35hkg8r wm-k"/><path class="q8m1dzbvs wm-a"/><path class="i09w7nb-z wm-deco"/><path class="ecv-79qom wm-k"/><path class="so3y5m2lo wm-a"/><path class="o3dwf9wyo wm-shadow"/><path class="md6hahb5s wm-shine"/><path class="g3-i5tpqo wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:coins"} {...others} />);
}

export default Component;
