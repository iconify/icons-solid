import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jea-yh2jg.css';
import '../../css/d/dxyc4p_3e.css';
import '../../css/q/q73kfvgtz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jea-yh2jg"/><path class="dxyc4p_3e"/><path class="q73kfvgtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-20-bold"} {...others} />);
}

export default Component;
