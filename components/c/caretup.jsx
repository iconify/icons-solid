import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfvwfdc9y.css';

const viewBox = {"width":16,"height":9};
const content = `<path class="vfvwfdc9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:caretup"} {...others} />);
}

export default Component;
