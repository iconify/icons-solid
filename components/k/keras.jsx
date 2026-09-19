import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-9o0_b7b.css';
import '../../css/k/ka84qdbbc.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="d-9o0_b7b"/><path class="ka84qdbbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:keras"} {...others} />);
}

export default Component;
