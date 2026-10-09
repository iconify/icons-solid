import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3-w5po8z.css';
import '../../css/k/kyspg4brs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m3-w5po8z"/><path class="kyspg4brs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-conditioning-48"} {...others} />);
}

export default Component;
