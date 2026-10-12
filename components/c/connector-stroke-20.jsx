import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_v0yebin.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j_v0yebin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:connector-stroke-20"} {...others} />);
}

export default Component;
