import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0duj3ble.css';
import '../../css/x/x3wc924xj.css';
import '../../css/i/i1s8y7e8w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i0duj3ble"/><path class="x3wc924xj"/><path class="i1s8y7e8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sync-48"} {...others} />);
}

export default Component;
