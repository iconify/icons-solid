import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhzb-acko.css';
import '../../css/r/r1ceurbff.css';
import '../../css/z/zsl5jvb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fhzb-acko"/><path class="r1ceurbff"/><path class="zsl5jvb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-trip-advisor"} {...others} />);
}

export default Component;
