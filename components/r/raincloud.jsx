import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_7l6fcgc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k_7l6fcgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:raincloud"} {...others} />);
}

export default Component;
