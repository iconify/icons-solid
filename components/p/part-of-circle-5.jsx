import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3gi5bchw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t3gi5bchw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:part-of-circle-5"} {...others} />);
}

export default Component;
