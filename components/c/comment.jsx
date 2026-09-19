import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qp0f-kb_f.css';
import '../../css/u/u-wecgbuh.css';
import '../../css/d/dxsz4yl4g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qp0f-kb_f"/><path class="u-wecgbuh"/><path class="dxsz4yl4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:comment"} {...others} />);
}

export default Component;
