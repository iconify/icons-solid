import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-lhw1bdi.css';
import '../../css/g/gjskco46o.css';
import '../../css/c/c70knuxun.css';
import '../../css/m/mkyk_ebea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v-lhw1bdi"/><path class="gjskco46o"/><path class="c70knuxun"/><path class="mkyk_ebea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:coffee-cup-hot-2"} {...others} />);
}

export default Component;
