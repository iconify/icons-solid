import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xquc5jbvi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xquc5jbvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crankshaft-20-bold"} {...others} />);
}

export default Component;
