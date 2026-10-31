import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3stb3b7k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t3stb3b7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-arrow-right-round"} {...others} />);
}

export default Component;
