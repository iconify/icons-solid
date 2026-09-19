import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgv36mbha.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zgv36mbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:interlocking-rings-stroke-16"} {...others} />);
}

export default Component;
