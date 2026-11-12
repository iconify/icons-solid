import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3oy0ineo.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q3oy0ineo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:deepseek"} {...others} />);
}

export default Component;
