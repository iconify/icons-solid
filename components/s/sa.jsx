import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwey4ebcb.css';
import '../../css/k/kw_djybrm.css';
import '../../css/u/u4tr0j94d.css';
import '../../css/e/ea361u4-y.css';
import '../../css/p/piztulodx.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xwey4ebcb"/><path clip-rule="evenodd" class="kw_djybrm"/><path class="u4tr0j94d"/><path clip-rule="evenodd" class="ea361u4-y"/><path class="piztulodx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:sa"} {...others} />);
}

export default Component;
