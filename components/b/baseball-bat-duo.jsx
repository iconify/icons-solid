import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bc2l054ta.css';
import '../../css/w/w_qvpc58d.css';
import '../../css/f/ffj0jbcke.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="bc2l054ta"/><path class="w_qvpc58d"/><path class="ffj0jbcke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:baseball-bat-duo"} {...others} />);
}

export default Component;
