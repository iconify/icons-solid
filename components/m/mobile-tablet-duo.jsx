import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xye_l8m-b.css';
import '../../css/r/ru8yyn5ec.css';
import '../../css/n/nrb9a_bbd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xye_l8m-b"/><path class="ru8yyn5ec"/><path class="nrb9a_bbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mobile-tablet-duo"} {...others} />);
}

export default Component;
