import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxcl3kb-l.css';
import '../../css/y/y-7_m5bwb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zxcl3kb-l"/><path class="y-7_m5bwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ai-generate"} {...others} />);
}

export default Component;
