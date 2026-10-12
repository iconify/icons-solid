import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpfsank0h.css';
import '../../css/u/uedqdgfhf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lpfsank0h"/><path class="uedqdgfhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bubble-stack-stroke-20"} {...others} />);
}

export default Component;
