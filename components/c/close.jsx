import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgj5nhvcz.css';
import '../../css/m/mjyk0m7ab.css';

const viewBox = {"width":12,"height":16};
const content = `<path class="bgj5nhvcz"/><path class="mjyk0m7ab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:close"} {...others} />);
}

export default Component;
