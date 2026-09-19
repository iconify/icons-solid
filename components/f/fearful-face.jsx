import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwrfwdtmg.css';
import '../../css/z/z_rnxebux.css';
import '../../css/w/w4gnlobgl.css';
import '../../css/x/xje17hzpr.css';
import '../../css/a/a8_6-8b2y.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="iwrfwdtmg"/><path class="z_rnxebux"/><path class="w4gnlobgl"/><path class="xje17hzpr"/><path class="a8_6-8b2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:fearful-face"} {...others} />);
}

export default Component;
