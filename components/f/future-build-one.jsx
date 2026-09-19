import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/z/zix4_qiqx.css';
import '../../css/h/h1f5izb8g.css';
import '../../css/x/xmgvg-vix.css';
import '../../css/i/i2gj8ehql.css';
import '../../css/i/i5r3vfbfi.css';
import '../../css/v/v-khs1gwf.css';
import '../../css/p/p_7e51buh.css';
import '../../css/a/a1vt4tf-b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="zix4_qiqx"/><path class="h1f5izb8g"/><path class="xmgvg-vix"/><path class="i2gj8ehql"/><path class="i5r3vfbfi"/><path class="v-khs1gwf"/><path class="p_7e51buh"/><path class="a1vt4tf-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:future-build-one"} {...others} />);
}

export default Component;
