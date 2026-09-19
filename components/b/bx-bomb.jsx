import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo8f6ub5d.css';
import '../../css/i/ibm4w8blz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xo8f6ub5d"/><path class="ibm4w8blz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-bomb"} {...others} />);
}

export default Component;
