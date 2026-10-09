import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9obxowyy.css';
import '../../css/n/n1rnmdo-a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i9obxowyy"/><path class="n1rnmdo-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:award-20"} {...others} />);
}

export default Component;
