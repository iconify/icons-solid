import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lzz7smhdu.css';
import '../../css/v/v_ctii0wf.css';
import '../../css/l/lgngwe9qv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="lzz7smhdu"/><path class="v_ctii0wf"/><path class="lgngwe9qv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:satellite-duo"} {...others} />);
}

export default Component;
