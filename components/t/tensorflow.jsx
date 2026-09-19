import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfpp4qbmp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vfpp4qbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:tensorflow"} {...others} />);
}

export default Component;
