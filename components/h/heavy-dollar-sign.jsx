import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm_agbbjd.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="fm_agbbjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:heavy-dollar-sign"} {...others} />);
}

export default Component;
