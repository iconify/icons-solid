import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y16zy5prc.css';
import '../../css/f/f2e41l4km.css';
import '../../css/g/g6bpa0bpk.css';
import '../../css/f/fzzv_eb8o.css';
import '../../css/u/uyak4610i.css';
import '../../css/z/zer2uyhpc.css';
import '../../css/h/h45xs7b1l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="y16zy5prc"/><path class="f2e41l4km"/><path class="g6bpa0bpk"/><path class="fzzv_eb8o"/><path class="uyak4610i"/><path class="zer2uyhpc"/><path class="h45xs7b1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:fire-extinguisher-sign"} {...others} />);
}

export default Component;
