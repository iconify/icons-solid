import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/smch_v_gi.css';
import '../../css/r/r66w1xbsj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="smch_v_gi"/><path class="r66w1xbsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ellipsis-duo"} {...others} />);
}

export default Component;
