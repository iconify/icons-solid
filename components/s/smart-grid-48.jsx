import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsjqddezd.css';
import '../../css/d/ds9x_zbhf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rsjqddezd"/><path class="ds9x_zbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-grid-48"} {...others} />);
}

export default Component;
