import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygkzszo4g.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/aw0wz_bot.css';
import '../../css/n/nhsvu5unl.css';
import '../../css/f/fd89gybyn.css';
import '../../css/q/q9sn6zbpf.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVG2j6L5NBb"><path class="ygkzszo4g"/></clipPath></defs><g clip-path="url(#SVG2j6L5NBb)" transform="translate(115.7)scale(.94)" class="d2kvgvbvc"><path class="aw0wz_bot"/><path class="nhsvu5unl"/><path class="fd89gybyn"/><path class="q9sn6zbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cv-4x3"} {...others} />);
}

export default Component;
