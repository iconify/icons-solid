import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwuy1sbez.css';
import '../../css/f/ff9jhsbaq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dwuy1sbez"/><rect class="ff9jhsbaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:lock-open-outline"} {...others} />);
}

export default Component;
