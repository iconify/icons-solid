import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9nf_fbqv.css';
import '../../css/r/rn7_tzbji.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f9nf_fbqv"/><path class="rn7_tzbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-bottle-20-bold"} {...others} />);
}

export default Component;
