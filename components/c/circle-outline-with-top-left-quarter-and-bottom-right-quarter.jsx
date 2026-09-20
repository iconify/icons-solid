import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn1pn-dlk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bn1pn-dlk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:circle-outline-with-top-left-quarter-and-bottom-right-quarter"} {...others} />);
}

export default Component;
