import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm35-5f3q.css';
import '../../css/n/n51-uhb-w.css';
import '../../css/x/x10tn5ajc.css';
import '../../css/z/z4o1lgbqs.css';
import '../../css/v/vlvrj7rnh.css';
import '../../css/c/cyo586t7q.css';
import '../../css/p/p9fff90oi.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/v/vl9d8-b8x.css';
import '../../css/b/bvn4u3b6g.css';
import '../../css/e/e4jf3lb-l.css';
import '../../css/t/t171cq0ys.css';
import '../../css/i/i-e35rbpj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lm35-5f3q"/><path class="n51-uhb-w"/><circle class="x10tn5ajc"/><circle class="z4o1lgbqs"/><path class="vlvrj7rnh"/><path class="cyo586t7q"/><path class="p9fff90oi"/><g class="x8poo_bjf"><path class="vl9d8-b8x"/><circle class="bvn4u3b6g"/><circle class="e4jf3lb-l"/><path class="t171cq0ys"/><path class="i-e35rbpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:delivery-truck"} {...others} />);
}

export default Component;
