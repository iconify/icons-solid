import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpeye7b8j.css';
import '../../css/t/trobavbbl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fpeye7b8j"/><path class="trobavbbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:anemometer-20-bold"} {...others} />);
}

export default Component;
