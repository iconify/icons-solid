import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7d8ty_6p.css';
import '../../css/e/e8_qdzh7e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l7d8ty_6p"/><path class="e8_qdzh7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bear-48"} {...others} />);
}

export default Component;
