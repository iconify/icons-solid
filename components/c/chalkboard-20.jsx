import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xccoeqbhm.css';
import '../../css/w/wqol9ac8v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xccoeqbhm"/><path class="wqol9ac8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chalkboard-20"} {...others} />);
}

export default Component;
