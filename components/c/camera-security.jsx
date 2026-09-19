import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wpqy0pbmo.css';
import '../../css/a/anezrp_4v.css';
import '../../css/w/w9qsqgbnh.css';
import '../../css/m/mq7666bzl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="wpqy0pbmo"/><path class="anezrp_4v"/><path class="w9qsqgbnh"/><path class="mq7666bzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:camera-security"} {...others} />);
}

export default Component;
