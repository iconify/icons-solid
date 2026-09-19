import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0ylf6w5b.css';
import '../../css/r/rt3j0ibnj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m0ylf6w5b"/><path class="rt3j0ibnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:alarm"} {...others} />);
}

export default Component;
