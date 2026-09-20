import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7bsj1rwl.css';
import '../../css/i/ia3cgzb5r.css';
import '../../css/o/oslt-lh5u.css';
import '../../css/n/njyzmtezn.css';
import '../../css/x/x-wwbsl7s.css';
import '../../css/s/s3o1w4boc.css';
import '../../css/g/gqynfnqem.css';
import '../../css/x/x9-vtrb8b.css';
import '../../css/y/yjr5lz6uv.css';
import '../../css/b/bimnsmbpx.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/asj03662w.css';
import '../../css/i/iin022ben.css';
import '../../css/a/adw7g7byx.css';
import '../../css/m/mp5qvmbkg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="l7bsj1rwl"/><path class="ia3cgzb5r"/><path class="oslt-lh5u"/><path class="njyzmtezn"/><path class="x-wwbsl7s"/><path class="s3o1w4boc"/><path class="gqynfnqem"/><path class="x9-vtrb8b"/><path class="yjr5lz6uv"/><path class="bimnsmbpx"/><g class="jn8qy4bru"><path class="asj03662w"/><path class="iin022ben"/><path class="adw7g7byx"/><path class="mp5qvmbkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:stupa"} {...others} />);
}

export default Component;
