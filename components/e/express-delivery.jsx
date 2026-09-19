import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/m/m53vg_m6x.css';
import '../../css/q/q22ysacbo.css';
import '../../css/o/o72_gtj4k.css';
import '../../css/m/m5tkhubbu.css';
import '../../css/k/ko39ytblj.css';
import '../../css/h/h3rgalbvj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="m53vg_m6x"/><path class="q22ysacbo"/><path class="o72_gtj4k"/><path class="m5tkhubbu"/><path class="ko39ytblj"/><path class="h3rgalbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:express-delivery"} {...others} />);
}

export default Component;
