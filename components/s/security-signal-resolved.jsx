import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp-9wf2on.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tp-9wf2on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:security-signal-resolved"} {...others} />);
}

export default Component;
