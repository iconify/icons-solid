import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et-6srbqf.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="et-6srbqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:webpack"} {...others} />);
}

export default Component;
