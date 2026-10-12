import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zrix60b6i.css';
import '../../css/b/b1iyzebvx.css';
import '../../css/d/d0sy1va8p.css';
import '../../css/c/cixfqgbyo.css';
import '../../css/j/jhjp1cckz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zrix60b6i"/><ellipse class="b1iyzebvx"/><ellipse class="d0sy1va8p"/><path class="cixfqgbyo"/><path class="jhjp1cckz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:oil-barrel"} {...others} />);
}

export default Component;
