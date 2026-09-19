import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vllpgtbvv.css';
import '../../css/y/yd1k4mbzu.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="vllpgtbvv"/><path class="yd1k4mbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:mouse"} {...others} />);
}

export default Component;
