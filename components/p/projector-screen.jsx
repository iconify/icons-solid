import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/l1_acdb5e.css';
import '../../css/g/gwh8zbc3o.css';
import '../../css/a/af49crb6p.css';
import '../../css/s/s-vd_vx5x.css';
import '../../css/g/gjexcmflt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="l1_acdb5e"/><path class="gwh8zbc3o"/><path class="af49crb6p"/><path class="s-vd_vx5x"/><path class="gjexcmflt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:projector-screen"} {...others} />);
}

export default Component;
