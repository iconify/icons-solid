import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/eym-d9b2y.css';
import '../../css/n/n7sq4abaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="eym-d9b2y"/><path class="n7sq4abaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-offset-top-sharp-two-tone"} {...others} />);
}

export default Component;
