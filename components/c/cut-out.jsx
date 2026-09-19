import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rirux2j4y.css';
import '../../css/a/acwmw9bjn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rirux2j4y"/><path class="acwmw9bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cut-out"} {...others} />);
}

export default Component;
