import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5-e9pb9h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j5-e9pb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cocktail-with-straw"} {...others} />);
}

export default Component;
