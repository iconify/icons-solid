import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcg0lcc6u.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="lcg0lcc6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:close-braket"} {...others} />);
}

export default Component;
