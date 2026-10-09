import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_e3wgwgv.css';
import '../../css/t/tgihwabmg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l_e3wgwgv"/><path class="tgihwabmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bridge-48"} {...others} />);
}

export default Component;
