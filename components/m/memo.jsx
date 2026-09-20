import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqmhvbh6q.css';
import '../../css/o/o7ij3gm1j.css';
import '../../css/c/cju1jdbhp.css';
import '../../css/t/tj_wbmb9z.css';
import '../../css/q/qaqbhkbko.css';
import '../../css/l/l0-yqwbmu.css';
import '../../css/w/w3lmcibjg.css';
import '../../css/d/dez20vbqn.css';
import '../../css/i/iylmx3b1i.css';
import '../../css/v/v63lzwb_h.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGWng0jeas" class="aqmhvbh6q"/></defs><path class="o7ij3gm1j"/><path class="cju1jdbhp"/><path class="tj_wbmb9z"/><path class="qaqbhkbko"/><path class="l0-yqwbmu"/><use href="#SVGWng0jeas"/><path class="w3lmcibjg"/><use href="#SVGWng0jeas"/><path class="dez20vbqn"/><path class="iylmx3b1i"/><path class="v63lzwb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:memo"} {...others} />);
}

export default Component;
