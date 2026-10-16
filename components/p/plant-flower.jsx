import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7ot135tw.css';
import '../../css/d/du7jeqb_s.css';
import '../../css/u/uh9f40bbs.css';
import '../../css/s/s4cg6p0ks.css';
import '../../css/u/uq-g_ab_u.css';
import '../../css/b/b1slr51oa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g7ot135tw"/><path class="du7jeqb_s"/><path class="uh9f40bbs"/><path class="s4cg6p0ks"/><path class="uq-g_ab_u"/><path class="b1slr51oa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:plant-flower"} {...others} />);
}

export default Component;
