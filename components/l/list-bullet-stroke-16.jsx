import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdacewuph.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sjgwxabga.css';
import '../../css/n/n_acx-3do.css';
import '../../css/a/abs76zb2o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pdacewuph"/><g class="cuyn6tgcc"><circle class="sjgwxabga"/><circle class="n_acx-3do"/><circle class="abs76zb2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:list-bullet-stroke-16"} {...others} />);
}

export default Component;
