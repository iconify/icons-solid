import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfsfruvhw.css';
import '../../css/e/e9tnf2s0u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sfsfruvhw"/><path class="e9tnf2s0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thumbs-down-20-bold"} {...others} />);
}

export default Component;
