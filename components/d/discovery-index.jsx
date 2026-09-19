import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/y/ycq3a_bvz.css';
import '../../css/s/slcuhsbtt.css';
import '../../css/d/dtu8ynbnb.css';
import '../../css/n/nsijrfxsp.css';
import '../../css/a/a45z273sx.css';
import '../../css/p/pksz1bchr.css';
import '../../css/q/qgtamf-lx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="ycq3a_bvz"/><path class="slcuhsbtt"/><path class="dtu8ynbnb"/><path class="nsijrfxsp"/><rect class="a45z273sx"/><path class="pksz1bchr"/><path class="qgtamf-lx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:discovery-index"} {...others} />);
}

export default Component;
