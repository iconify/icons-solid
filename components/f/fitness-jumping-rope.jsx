import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ccjn55b_n.css';
import '../../css/q/qy6klij7x.css';
import '../../css/c/c1w23rlkg.css';
import '../../css/i/ie2qflbgw.css';
import '../../css/i/iynzr3bkf.css';
import '../../css/s/s5c5ibf1w.css';
import '../../css/d/dail-xb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ccjn55b_n"/><path class="qy6klij7x"/><path class="c1w23rlkg"/><path class="ie2qflbgw"/><path class="iynzr3bkf"/><path class="s5c5ibf1w"/><path class="dail-xb2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:fitness-jumping-rope"} {...others} />);
}

export default Component;
