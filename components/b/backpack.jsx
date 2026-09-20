import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r58q7ybvc.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="r58q7ybvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:backpack"} {...others} />);
}

export default Component;
