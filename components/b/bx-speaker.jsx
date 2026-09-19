import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv1w6dbgf.css';
import '../../css/y/yglam5kqs.css';
import '../../css/v/vqeh6flxd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tv1w6dbgf"/><path class="yglam5kqs"/><circle class="vqeh6flxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-speaker"} {...others} />);
}

export default Component;
