import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3gk-cbll.css';
import '../../css/e/etgb51bju.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m3gk-cbll"/><path class="etgb51bju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:secondary-substation-48"} {...others} />);
}

export default Component;
