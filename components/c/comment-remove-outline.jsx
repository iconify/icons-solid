import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzf26vbro.css';
import '../../css/x/xm929l28t.css';
import '../../css/t/tj416dxhv.css';
import '../../css/i/i5iq5xaql.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xzf26vbro"/><path clip-rule="evenodd" class="xm929l28t"/><path class="tj416dxhv"/><path clip-rule="evenodd" class="i5iq5xaql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:comment-remove-outline"} {...others} />);
}

export default Component;
