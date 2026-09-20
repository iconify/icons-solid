import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0e2fqd9g.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="p0e2fqd9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:arrow-left"} {...others} />);
}

export default Component;
