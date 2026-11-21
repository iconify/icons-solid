import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omuyjcckl.css';

const viewBox = {"width":9956,"height":700,"left":55,"top":142};
const content = `<path class="omuyjcckl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:claude-of-tanks"} {...others} />);
}

export default Component;
