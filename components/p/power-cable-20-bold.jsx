import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enj9kbcag.css';
import '../../css/l/ls7lhjm1d.css';
import '../../css/q/qi4h0bbag.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="enj9kbcag"/><path class="ls7lhjm1d"/><path class="qi4h0bbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-cable-20-bold"} {...others} />);
}

export default Component;
