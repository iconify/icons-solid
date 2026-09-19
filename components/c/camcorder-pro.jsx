import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgttq2b0w.css';
import '../../css/d/dcc7cqboo.css';
import '../../css/y/y3lroeqvm.css';
import '../../css/u/u0dto30lb.css';
import '../../css/s/s46ez5_fa.css';
import '../../css/y/yane7ibxg.css';
import '../../css/m/madd3-xxv.css';
import '../../css/f/f-x6pnbgh.css';
import '../../css/w/w1jne4bus.css';
import '../../css/w/wdb62fb_r.css';
import '../../css/d/dxs441hql.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hgttq2b0w"/><path class="dcc7cqboo"/><path class="y3lroeqvm"/><path class="u0dto30lb"/><path class="s46ez5_fa"/><path class="yane7ibxg"/><path class="madd3-xxv"/><path class="f-x6pnbgh"/><g class="w1jne4bus"><circle class="wdb62fb_r"/><path class="dxs441hql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:camcorder-pro"} {...others} />);
}

export default Component;
