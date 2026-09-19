import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d47xi2b9o.css';
import '../../css/f/fjryjwbdx.css';
import '../../css/n/nydaq4aap.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d47xi2b9o"/><path class="fjryjwbdx"/><path class="nydaq4aap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:krona"} {...others} />);
}

export default Component;
