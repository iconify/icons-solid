import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urxd0gb-h.css';
import '../../css/l/lmhb_59oy.css';
import '../../css/d/dtj3n2bkj.css';
import '../../css/e/eq-8-xb3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="urxd0gb-h"/><path class="lmhb_59oy"/><path class="dtj3n2bkj"/><path class="eq-8-xb3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:home-scene"} {...others} />);
}

export default Component;
