import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uqcoudqyh.css';
import '../../css/i/i5lvicvhn.css';
import '../../css/r/rj4248bgl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uqcoudqyh"/><path class="i5lvicvhn"/><path class="rj4248bgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-arrow-u-turn-left-two-tone"} {...others} />);
}

export default Component;
