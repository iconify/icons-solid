import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sq79_r4_x.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="sq79_r4_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:eyedropper-full"} {...others} />);
}

export default Component;
