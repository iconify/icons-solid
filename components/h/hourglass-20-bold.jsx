import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iaeivt5cq.css';
import '../../css/j/j2tlh8boa.css';
import '../../css/r/rv0_ax7fp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iaeivt5cq"/><path class="j2tlh8boa"/><path class="rv0_ax7fp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hourglass-20-bold"} {...others} />);
}

export default Component;
