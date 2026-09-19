import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub82tgj1c.css';
import '../../css/e/espyn4ruh.css';
import '../../css/o/otxb2d-yx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ub82tgj1c"/><path class="espyn4ruh"/><path class="otxb2d-yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:southeastarrow"} {...others} />);
}

export default Component;
