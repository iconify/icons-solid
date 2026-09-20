import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trt_o2bfg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="trt_o2bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:compass-square-outline"} {...others} />);
}

export default Component;
