import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5yn9ndtj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z5yn9ndtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:close-outline"} {...others} />);
}

export default Component;
