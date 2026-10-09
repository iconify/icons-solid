import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xy7xqk_um.css';
import '../../css/y/yyty6bb4a.css';
import '../../css/w/w5dpz7-za.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xy7xqk_um"/><path class="yyty6bb4a"/><path class="w5dpz7-za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-3x3-48-bold"} {...others} />);
}

export default Component;
