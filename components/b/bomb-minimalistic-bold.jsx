import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nb-40v-6s.css';
import '../../css/s/sds89e5-e.css';
import '../../css/l/l8lu4kgzj.css';
import '../../css/n/nkxvuvbyu.css';
import '../../css/e/elbxa7i0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nb-40v-6s"/><path class="sds89e5-e"/><path class="l8lu4kgzj"/><path class="nkxvuvbyu"/><path class="elbxa7i0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-minimalistic-bold"} {...others} />);
}

export default Component;
