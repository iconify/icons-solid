import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp9wi3bpj.css';
import '../../css/i/ie7lpxbir.css';
import '../../css/q/qpr0x4hrv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zp9wi3bpj"/><path class="ie7lpxbir"/><path class="qpr0x4hrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-in-manual-wheelchair"} {...others} />);
}

export default Component;
