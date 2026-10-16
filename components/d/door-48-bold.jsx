import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9f-pebyy.css';
import '../../css/a/aaw7kqsgb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m9f-pebyy"/><path class="aaw7kqsgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:door-48-bold"} {...others} />);
}

export default Component;
