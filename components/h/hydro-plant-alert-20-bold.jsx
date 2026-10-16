import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p16fzd8jz.css';
import '../../css/r/rpdwkt9nl.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p16fzd8jz"/><path class="rpdwkt9nl"/><path class="jeyqzjnhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydro-plant-alert-20-bold"} {...others} />);
}

export default Component;
