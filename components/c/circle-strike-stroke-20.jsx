import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czkug8blo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="czkug8blo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:circle-strike-stroke-20"} {...others} />);
}

export default Component;
