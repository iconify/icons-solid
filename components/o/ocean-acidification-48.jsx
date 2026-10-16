import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh24gkqan.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kh24gkqan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ocean-acidification-48"} {...others} />);
}

export default Component;
