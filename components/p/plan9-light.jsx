import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/b/b0wogibto.css';
import '../../css/s/sfv3ziq2o.css';
import '../../css/w/wi8ub9b-l.css';
import '../../css/a/a5herbbey.css';
import '../../css/b/bi_qlwb9t.css';
import '../../css/s/s8gb2bcpd.css';
import '../../css/s/s8t5ibelx.css';
import '../../css/l/l6waw9b4q.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="b0wogibto"/><path class="sfv3ziq2o"/><path class="wi8ub9b-l"/><path class="a5herbbey"/><path class="bi_qlwb9t"/><path class="s8gb2bcpd"/><path class="s8t5ibelx"/><path class="l6waw9b4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:plan9-light"} {...others} />);
}

export default Component;
