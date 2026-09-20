import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/c/cf5tx4chs.css';
import '../../css/m/m2s5uoxdk.css';
import '../../css/q/qlccd6biw.css';
import '../../css/m/m5x6lx8cn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="cf5tx4chs"/><path class="m2s5uoxdk"/><path class="qlccd6biw"/><path class="m5x6lx8cn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:location-pin-store"} {...others} />);
}

export default Component;
