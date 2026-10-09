import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_hrlmb2h.css';
import '../../css/t/tbt13x_gy.css';
import '../../css/i/iipfeyb4m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m_hrlmb2h"/><path class="tbt13x_gy"/><path class="iipfeyb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:service-vessel-48-bold"} {...others} />);
}

export default Component;
