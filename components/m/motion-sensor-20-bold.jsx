import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgidmqc2p.css';
import '../../css/v/v2otxnbjx.css';
import '../../css/m/m_hwvkbhw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zgidmqc2p"/><path class="v2otxnbjx"/><path class="m_hwvkbhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:motion-sensor-20-bold"} {...others} />);
}

export default Component;
