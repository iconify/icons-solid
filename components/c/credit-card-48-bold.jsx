import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6xr_117y.css';
import '../../css/e/ej4s9gber.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p6xr_117y"/><path class="ej4s9gber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:credit-card-48-bold"} {...others} />);
}

export default Component;
