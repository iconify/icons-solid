import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/am_qhhbci.css';
import '../../css/h/h7p8jpp_k.css';
import '../../css/o/osu72-hwf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="am_qhhbci"/><path class="h7p8jpp_k"/><path class="osu72-hwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:wtc"} {...others} />);
}

export default Component;
