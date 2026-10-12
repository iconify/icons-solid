import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t83_2skig.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t83_2skig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bell-stroke-20"} {...others} />);
}

export default Component;
