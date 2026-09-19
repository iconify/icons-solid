import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i136-euic.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="i136-euic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:alert-warning-fill-12"} {...others} />);
}

export default Component;
