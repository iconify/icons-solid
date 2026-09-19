import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvbkgeawu.css';
import '../../css/y/y87l3m6qq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pvbkgeawu"/><path class="y87l3m6qq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ansys-wordmark"} {...others} />);
}

export default Component;
