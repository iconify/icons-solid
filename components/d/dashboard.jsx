import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hng5s4j4p.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="hng5s4j4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:dashboard"} {...others} />);
}

export default Component;
