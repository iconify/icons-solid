import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzh9c45_d.css';
import '../../css/g/gbelpuohj.css';
import '../../css/c/c_5eyibxs.css';
import '../../css/y/y34ty_lnc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bzh9c45_d"/><path class="gbelpuohj"/><path class="c_5eyibxs"/><path class="y34ty_lnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hand-held-tablet-drawing"} {...others} />);
}

export default Component;
