import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c42n_vo5g.css';
import '../../css/e/ejn0xk-6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="c42n_vo5g"/><path class="ejn0xk-6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:package-x-sharp-two-tone"} {...others} />);
}

export default Component;
