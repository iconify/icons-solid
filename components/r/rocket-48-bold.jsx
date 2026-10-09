import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-7zydo-z.css';
import '../../css/i/ifsbdgx5h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i-7zydo-z"/><path class="ifsbdgx5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rocket-48-bold"} {...others} />);
}

export default Component;
