import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w84vznkgo.css';
import '../../css/e/eg1ps4yde.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="w84vznkgo"/><path class="eg1ps4yde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:invert-mode-outline"} {...others} />);
}

export default Component;
