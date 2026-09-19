import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fb195ladc.css';
import '../../css/d/d-047h7xd.css';
import '../../css/c/cvqkf_yxp.css';
import '../../css/l/ly-3bkb4n.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="fb195ladc"/><path clip-rule="evenodd" class="d-047h7xd"/><path class="cvqkf_yxp"/><path clip-rule="evenodd" class="ly-3bkb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:baseball-outline"} {...others} />);
}

export default Component;
