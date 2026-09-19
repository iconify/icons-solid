import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl42_cssb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jl42_cssb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:shopping-bag"} {...others} />);
}

export default Component;
