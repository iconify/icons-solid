import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/hqqa_ubhn.css';
import '../../css/s/sltn4qbia.css';
import '../../css/f/fv__vyeld.css';
import '../../css/r/r59vmv8af.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="hqqa_ubhn"/><path class="sltn4qbia"/><path class="fv__vyeld"/><path class="r59vmv8af"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:heart-rate-clipboard"} {...others} />);
}

export default Component;
