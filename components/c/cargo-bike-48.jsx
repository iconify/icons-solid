import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gladqriwb.css';
import '../../css/y/y4lv5l4vm.css';
import '../../css/k/k_e8n9b5o.css';
import '../../css/m/mvd344-pk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gladqriwb"/><path class="y4lv5l4vm"/><path class="k_e8n9b5o"/><path class="mvd344-pk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cargo-bike-48"} {...others} />);
}

export default Component;
