import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru3w11duv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ru3w11duv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:search-ai-4-line"} {...others} />);
}

export default Component;
