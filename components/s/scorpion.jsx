import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgn50-j5m.css';
import '../../css/n/nx-9cinea.css';
import '../../css/a/a6r1geblx.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/uwe5-db5o.css';
import '../../css/p/p5t05ibft.css';
import '../../css/p/pf9v1kalj.css';
import '../../css/y/ye4xqfc6m.css';
import '../../css/c/c4_grnd8d.css';
import '../../css/n/no081tj2j.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kgn50-j5m"/><path class="nx-9cinea"/><path class="a6r1geblx"/><g class="ij2x_72vy"><path class="uwe5-db5o"/><path class="p5t05ibft"/><path class="pf9v1kalj"/><path class="ye4xqfc6m"/><path class="c4_grnd8d"/><path class="no081tj2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:scorpion"} {...others} />);
}

export default Component;
