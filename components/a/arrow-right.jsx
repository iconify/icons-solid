import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/homst6gcz.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="homst6gcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:arrow-right"} {...others} />);
}

export default Component;
