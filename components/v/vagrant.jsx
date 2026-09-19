import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu4ihg-sz.css';
import '../../css/x/x3brn5b_y.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="fu4ihg-sz"/><path class="x3brn5b_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:vagrant"} {...others} />);
}

export default Component;
