import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-5rh9o_m.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="u-5rh9o_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:banknote-stack-in-slot"} {...others} />);
}

export default Component;
