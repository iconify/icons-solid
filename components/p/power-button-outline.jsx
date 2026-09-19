import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtvndxeyx.css';
import '../../css/n/n8ie0gbut.css';
import '../../css/y/yxx4r0hjj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rtvndxeyx"/><path class="n8ie0gbut"/><path clip-rule="evenodd" class="yxx4r0hjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:power-button-outline"} {...others} />);
}

export default Component;
