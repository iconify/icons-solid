import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzds0la1g.css';
import '../../css/d/d1x_6zbkv.css';
import '../../css/j/j6_dfnhpm.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="rzds0la1g"/><path class="d1x_6zbkv"/><path class="j6_dfnhpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:cabinda"} {...others} />);
}

export default Component;
