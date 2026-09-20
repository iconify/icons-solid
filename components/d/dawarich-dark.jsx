import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5rb22bzv.css';
import '../../css/a/az0-jcc3g.css';
import '../../css/a/a847c404k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p5rb22bzv"/><path class="az0-jcc3g"/><path class="a847c404k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dawarich-dark"} {...others} />);
}

export default Component;
