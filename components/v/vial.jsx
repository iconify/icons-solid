import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/th2a0ccjf.css';
import '../../css/x/x0xh1wb0s.css';
import '../../css/y/yqc7myppr.css';
import '../../css/i/i74efuaoj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="th2a0ccjf"/><path class="x0xh1wb0s"/><path class="yqc7myppr"/><path class="i74efuaoj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vial"} {...others} />);
}

export default Component;
