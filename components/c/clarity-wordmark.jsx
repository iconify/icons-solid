import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1-w-prqa.css';
import '../../css/g/g7er_z6_h.css';
import '../../css/y/ysdvwkbgj.css';
import '../../css/d/drpzlxxvu.css';
import '../../css/f/flsifcbrr.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="e1-w-prqa"/><path class="g7er_z6_h"/><path class="ysdvwkbgj"/><path class="drpzlxxvu"/><path class="flsifcbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:clarity-wordmark"} {...others} />);
}

export default Component;
