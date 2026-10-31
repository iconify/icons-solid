import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sq6tdnpts.css';
import '../../css/t/t3di-p3xx.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="sq6tdnpts"/><path class="t3di-p3xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:morocco"} {...others} />);
}

export default Component;
