import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijgh9kb6y.css';
import '../../css/r/r409soybt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ijgh9kb6y"/><path class="r409soybt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-48"} {...others} />);
}

export default Component;
