import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu-l2rb6w.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="iu-l2rb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ollama"} {...others} />);
}

export default Component;
