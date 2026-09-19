import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1oexxbmr.css';
import '../../css/r/r-45tw1ar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1oexxbmr"/><path class="r-45tw1ar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-shield-minus"} {...others} />);
}

export default Component;
