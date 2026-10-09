import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axlm26blc.css';
import '../../css/t/taruh-bis.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="axlm26blc"/><path class="taruh-bis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dump-truck-48-bold"} {...others} />);
}

export default Component;
