import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/synxj3bnq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="synxj3bnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:heading"} {...others} />);
}

export default Component;
