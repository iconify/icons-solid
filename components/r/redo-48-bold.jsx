import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhdbk79fo.css';
import '../../css/q/qcnda-9od.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mhdbk79fo"/><path class="qcnda-9od"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:redo-48-bold"} {...others} />);
}

export default Component;
