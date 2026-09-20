import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl42bbbnp.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="jl42bbbnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:arrow-left-up"} {...others} />);
}

export default Component;
