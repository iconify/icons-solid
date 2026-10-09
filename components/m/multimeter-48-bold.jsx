import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b10s5pbto.css';
import '../../css/p/pcwfzwh2p.css';
import '../../css/g/gtg_d0cmx.css';
import '../../css/l/lvh1_3beu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b10s5pbto"/><path class="pcwfzwh2p"/><path class="gtg_d0cmx"/><path class="lvh1_3beu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:multimeter-48-bold"} {...others} />);
}

export default Component;
