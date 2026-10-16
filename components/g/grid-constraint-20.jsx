import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxafyvbuf.css';
import '../../css/t/t7uk038zd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wxafyvbuf"/><path class="t7uk038zd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-constraint-20"} {...others} />);
}

export default Component;
