import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhjg018pp.css';
import '../../css/a/a0pyaabma.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fhjg018pp"/><path class="a0pyaabma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chimney-20"} {...others} />);
}

export default Component;
