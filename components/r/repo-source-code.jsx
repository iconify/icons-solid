import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv2_vmbmc.css';
import '../../css/d/djk4s6bfq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zv2_vmbmc"/><path class="djk4s6bfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:repo-source-code"} {...others} />);
}

export default Component;
