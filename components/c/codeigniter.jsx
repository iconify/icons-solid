import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtx-7sn0l.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dtx-7sn0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:codeigniter"} {...others} />);
}

export default Component;
