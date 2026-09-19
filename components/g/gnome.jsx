import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rs4_mfifm.css';
import '../../css/k/kcrc3hg8p.css';
import '../../css/s/seh1ydy_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rs4_mfifm"/><path class="kcrc3hg8p"/><path class="seh1ydy_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gnome"} {...others} />);
}

export default Component;
