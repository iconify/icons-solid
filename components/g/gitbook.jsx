import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrc2k_n9n.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jrc2k_n9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:gitbook"} {...others} />);
}

export default Component;
