import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y19ixtbyb.css';
import '../../css/r/r_go1j2mv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="y19ixtbyb"/><path class="r_go1j2mv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:xd"} {...others} />);
}

export default Component;
