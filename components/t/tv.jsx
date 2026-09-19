import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/l/lvd74yj2i.css';
import '../../css/e/enz041qvv.css';
import '../../css/e/eh5w_acha.css';
import '../../css/s/si9_29bym.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="lvd74yj2i"/><path class="enz041qvv"/><path class="eh5w_acha"/><path class="si9_29bym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:tv"} {...others} />);
}

export default Component;
