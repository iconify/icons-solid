import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsnaprmvy.css';
import '../../css/k/kqrt5ob_v.css';
import '../../css/s/s6m-bfbsb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bsnaprmvy"/><path class="kqrt5ob_v"/><path class="s6m-bfbsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand-writing"} {...others} />);
}

export default Component;
