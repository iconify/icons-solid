import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4k0cub9g.css';
import '../../css/w/w0r7cfyuj.css';
import '../../css/d/dg_714v9i.css';
import '../../css/i/i2kg9bkjd.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/g/gb6gl17em.css';
import '../../css/w/w_bc_g2zg.css';
import '../../css/a/at9r03bxb.css';
import '../../css/z/zffkc3tej.css';
import '../../css/n/nx3sxzbgh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z4k0cub9g"/><path class="w0r7cfyuj"/><ellipse class="dg_714v9i"/><ellipse class="i2kg9bkjd"/><g class="brzn_0bpr"><path class="gb6gl17em"/><path class="w_bc_g2zg"/><ellipse class="at9r03bxb"/><ellipse class="zffkc3tej"/><path class="nx3sxzbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:oil-spill"} {...others} />);
}

export default Component;
