import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehapg43cu.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="ehapg43cu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:firefox"} {...others} />);
}

export default Component;
