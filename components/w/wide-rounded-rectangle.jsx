import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uul6rcssg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uul6rcssg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:wide-rounded-rectangle"} {...others} />);
}

export default Component;
