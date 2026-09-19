import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5mhyjbwd.css';
import '../../css/t/tq10f7bbh.css';
import '../../css/h/h-e9_jbqo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y5mhyjbwd"/><path class="tq10f7bbh"/><path class="h-e9_jbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:logo-famibot"} {...others} />);
}

export default Component;
