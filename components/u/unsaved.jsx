import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc6qyrb-v.css';
import '../../css/q/qrq26sblb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cc6qyrb-v"/><path class="qrq26sblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:unsaved"} {...others} />);
}

export default Component;
