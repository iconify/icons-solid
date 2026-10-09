import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxcjxo_wu.css';
import '../../css/x/xtrfu-zjx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dxcjxo_wu"/><path class="xtrfu-zjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:toggle-right-48-bold"} {...others} />);
}

export default Component;
