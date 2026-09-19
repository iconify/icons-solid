import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ds2fwszxt.css';
import '../../css/e/ey2gg78wq.css';
import '../../css/o/oaw0c1bnn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ds2fwszxt"/><path class="ey2gg78wq"/><path class="oaw0c1bnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tools-bold"} {...others} />);
}

export default Component;
