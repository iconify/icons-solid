import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd64d3bvp.css';
import '../../css/b/blynalbvu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fd64d3bvp"/><rect class="blynalbvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:lock-unlocked-fill-16"} {...others} />);
}

export default Component;
