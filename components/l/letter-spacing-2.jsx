import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp0--ebus.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tp0--ebus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:letter-spacing-2"} {...others} />);
}

export default Component;
