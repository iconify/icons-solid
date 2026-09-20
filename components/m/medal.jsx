import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/c/c9eqzcj_t.css';
import '../../css/s/smfayekib.css';
import '../../css/n/n79n4-xiv.css';
import '../../css/e/e52orn_mw.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="c9eqzcj_t"/><path class="smfayekib"/><path class="n79n4-xiv"/><path class="e52orn_mw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:medal"} {...others} />);
}

export default Component;
