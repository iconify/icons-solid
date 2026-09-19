import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7bx3lbll.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="o7bx3lbll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:moleculer"} {...others} />);
}

export default Component;
