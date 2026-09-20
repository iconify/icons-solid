import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n82dipk4k.css';
import '../../css/z/z55h80buv.css';

const viewBox = {"width":75,"height":75};
const content = `<circle class="n82dipk4k"/><path class="z55h80buv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:obs"} {...others} />);
}

export default Component;
