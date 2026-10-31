import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/l/lh2glsbmm.css';
import '../../css/s/s9c9z0bxi.css';
import '../../css/o/o5_gs3buy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="lh2glsbmm"/><path class="s9c9z0bxi"/><path class="o5_gs3buy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:prism-2-pop"} {...others} />);
}

export default Component;
