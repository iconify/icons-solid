import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/irfxq-bjb.css';
import '../../css/u/ux02hz79o.css';
import '../../css/e/eb87bxbvo.css';
import '../../css/p/pzohs8u1k.css';
import '../../css/n/n9uiqob0b.css';
import '../../css/q/qwy640b_f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="irfxq-bjb"/><path class="ux02hz79o"/><path class="eb87bxbvo"/><path class="pzohs8u1k"/><path class="n9uiqob0b"/><path class="qwy640b_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:tool-box"} {...others} />);
}

export default Component;
