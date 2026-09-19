import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs6sa0e_n.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="gs6sa0e_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:uv"} {...others} />);
}

export default Component;
