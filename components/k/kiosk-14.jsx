import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aiu3adc7c.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="aiu3adc7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:kiosk-14"} {...others} />);
}

export default Component;
