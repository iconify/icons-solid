import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbu-t6btd.css';
import '../../css/w/wou0m8doy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kbu-t6btd"/><path class="wou0m8doy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:minus-square-48-bold"} {...others} />);
}

export default Component;
