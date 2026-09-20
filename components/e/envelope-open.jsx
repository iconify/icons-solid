import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uy_jm2heq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uy_jm2heq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:envelope-open"} {...others} />);
}

export default Component;
