import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/r/r8mp9qbpu.css';
import '../../css/f/fwljlgbpa.css';
import '../../css/y/yxw6w8i6e.css';
import '../../css/m/ma-70zb3x.css';
import '../../css/e/e8rgduewg.css';
import '../../css/i/i_a6ehweo.css';
import '../../css/z/zy5u0nkao.css';
import '../../css/t/tqy-pjolc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="r8mp9qbpu"/><path class="fwljlgbpa"/><path class="yxw6w8i6e"/><path class="ma-70zb3x"/><path class="e8rgduewg"/><path class="i_a6ehweo"/><path class="zy5u0nkao"/><path class="tqy-pjolc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:movie-board"} {...others} />);
}

export default Component;
