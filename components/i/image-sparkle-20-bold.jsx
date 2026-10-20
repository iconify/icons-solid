import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nirzt8hqp.css';
import '../../css/k/kite7abkb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nirzt8hqp"/><path class="kite7abkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:image-sparkle-20-bold"} {...others} />);
}

export default Component;
