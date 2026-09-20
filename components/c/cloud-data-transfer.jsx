import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/n/n9apk4bhe.css';
import '../../css/z/zb_wf5-jy.css';
import '../../css/d/d-ghumb0x.css';
import '../../css/n/nlqbqoidw.css';
import '../../css/t/tm9wikbqh.css';
import '../../css/z/zpdkthbzf.css';

const viewBox = {"width":41,"height":41,"left":-0.5};
const content = `<g class="umm606kxf"><path class="n9apk4bhe"/><path class="zb_wf5-jy"/><path class="d-ghumb0x"/><path class="nlqbqoidw"/><path class="tm9wikbqh"/><path class="zpdkthbzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:cloud-data-transfer"} {...others} />);
}

export default Component;
