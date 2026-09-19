import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9b1e13eh.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="c9b1e13eh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:translation-updated-stroke-12"} {...others} />);
}

export default Component;
