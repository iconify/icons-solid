import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjz8wn-my.css';
import '../../css/u/ukun5-bzx.css';
import '../../css/p/p5wu9x5yk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tjz8wn-my"/><path class="ukun5-bzx"/><path class="p5wu9x5yk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-flexibility-20"} {...others} />);
}

export default Component;
