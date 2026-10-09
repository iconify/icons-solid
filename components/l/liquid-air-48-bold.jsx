import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1jezxbtq.css';
import '../../css/c/cj3y4tbey.css';
import '../../css/q/q5eafeb5u.css';
import '../../css/t/ta44qtbsu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j1jezxbtq"/><path class="cj3y4tbey"/><path class="q5eafeb5u"/><path class="ta44qtbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:liquid-air-48-bold"} {...others} />);
}

export default Component;
