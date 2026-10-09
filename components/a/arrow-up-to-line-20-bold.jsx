import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdilgkbdd.css';
import '../../css/f/fqlu4irdr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wdilgkbdd"/><path class="fqlu4irdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-to-line-20-bold"} {...others} />);
}

export default Component;
