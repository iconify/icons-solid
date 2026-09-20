import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpt1l0w-s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jpt1l0w-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:payment-card-in-slot"} {...others} />);
}

export default Component;
