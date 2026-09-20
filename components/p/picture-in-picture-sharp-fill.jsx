import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pjw3yhbkd.css';
import '../../css/h/hfu1j8bzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="pjw3yhbkd"/><path class="hfu1j8bzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:picture-in-picture-sharp-fill"} {...others} />);
}

export default Component;
