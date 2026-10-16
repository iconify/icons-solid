import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_6rrccmc.css';
import '../../css/u/ufby2lc1j.css';
import '../../css/x/x-xho5uub.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m_6rrccmc"/><path class="ufby2lc1j"/><path class="x-xho5uub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flow-meter-48-bold"} {...others} />);
}

export default Component;
