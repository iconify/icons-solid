import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/erfafodnh.css';
import '../../css/c/cvbi0mioi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="erfafodnh"/><path class="cvbi0mioi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:banknote-2-sharp-two-tone"} {...others} />);
}

export default Component;
