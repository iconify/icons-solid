import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6kkj_61z.css';
import '../../css/r/rk1l7-bke.css';
import '../../css/v/voewrtvds.css';
import '../../css/l/lin4p__le.css';
import '../../css/a/afhptjbze.css';
import '../../css/i/i71sa4syx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="b6kkj_61z"/><path clip-rule="evenodd" class="rk1l7-bke"/><path clip-rule="evenodd" class="voewrtvds"/><path class="lin4p__le"/><path clip-rule="evenodd" class="afhptjbze"/><path clip-rule="evenodd" class="i71sa4syx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:dslr-outline"} {...others} />);
}

export default Component;
