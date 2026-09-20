import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vc74_bcjd.css';
import '../../css/l/l953_nejt.css';
import '../../css/r/rbskpge7o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vc74_bcjd"/><path class="l953_nejt"/><path class="rbskpge7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:waving-hand"} {...others} />);
}

export default Component;
