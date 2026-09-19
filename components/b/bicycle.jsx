import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym7s1o7nd.css';
import '../../css/c/cgzpch7-k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ym7s1o7nd"/><path class="cgzpch7-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:bicycle"} {...others} />);
}

export default Component;
