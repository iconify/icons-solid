import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovlsupbow.css';
import '../../css/e/ep-e4lbdz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ovlsupbow"/><path class="ep-e4lbdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-lock-48"} {...others} />);
}

export default Component;
