import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yiv6ndwku.css';
import '../../css/k/kxz_eqbba.css';
import '../../css/p/pz8xr85_k.css';
import '../../css/l/l_5g153qv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="yiv6ndwku"/><path class="kxz_eqbba"/><path class="pz8xr85_k"/><path class="l_5g153qv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:color-picker"} {...others} />);
}

export default Component;
