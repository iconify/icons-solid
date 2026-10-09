import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2bu28b8d.css';
import '../../css/u/uhvsvhbwr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k2bu28b8d"/><path class="uhvsvhbwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fishing-48-bold"} {...others} />);
}

export default Component;
