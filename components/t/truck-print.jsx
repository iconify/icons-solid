import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sufbaeydo.css';
import '../../css/k/kwccv5wkb.css';
import '../../css/t/t1dtgzg2c.css';
import '../../css/v/vxk-ns8jz.css';
import '../../css/n/nthz9kb0v.css';
import '../../css/p/pmdxg9b9d.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sufbaeydo"/><path clip-rule="evenodd" class="kwccv5wkb"/><path clip-rule="evenodd" class="t1dtgzg2c"/><path class="vxk-ns8jz"/><path clip-rule="evenodd" class="nthz9kb0v"/><path clip-rule="evenodd" class="pmdxg9b9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:truck-print"} {...others} />);
}

export default Component;
