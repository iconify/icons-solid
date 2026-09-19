import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb2ic2ncu.css';

const viewBox = {"width":1024,"height":832};
const content = `<path class="gb2ic2ncu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:copyapp"} {...others} />);
}

export default Component;
