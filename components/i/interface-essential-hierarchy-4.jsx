import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/liim8eenz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="liim8eenz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-hierarchy-4"} {...others} />);
}

export default Component;
