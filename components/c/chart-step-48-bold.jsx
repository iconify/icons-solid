import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpel3hezc.css';
import '../../css/m/mrrh7xb5d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tpel3hezc"/><path class="mrrh7xb5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-step-48-bold"} {...others} />);
}

export default Component;
