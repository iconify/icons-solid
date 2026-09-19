import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pq_rksh3q.css';
import '../../css/l/lv5mf1b8a.css';
import '../../css/b/bxko2_b1k.css';
import '../../css/w/wd5g87bjx.css';
import '../../css/s/sqo_z4b1v.css';
import '../../css/x/x5qat_bxg.css';
import '../../css/p/p3i_4ibzo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pq_rksh3q"/><path clip-rule="evenodd" class="lv5mf1b8a"/><path clip-rule="evenodd" class="bxko2_b1k"/><path clip-rule="evenodd" class="wd5g87bjx"/><path class="sqo_z4b1v"/><path clip-rule="evenodd" class="x5qat_bxg"/><path clip-rule="evenodd" class="p3i_4ibzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:donkey"} {...others} />);
}

export default Component;
