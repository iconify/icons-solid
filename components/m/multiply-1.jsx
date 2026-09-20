import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr1r_p2bx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nr1r_p2bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:multiply-1"} {...others} />);
}

export default Component;
