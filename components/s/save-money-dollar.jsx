import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lz_qbtbon.css';
import '../../css/m/mf929jm4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lz_qbtbon"/><path class="mf929jm4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:save-money-dollar"} {...others} />);
}

export default Component;
