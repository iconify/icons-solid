import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/y/ysdhzzd7c.css';
import '../../css/b/bl9jv_bnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ysdhzzd7c"/><path class="bl9jv_bnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:phone-ringing-1"} {...others} />);
}

export default Component;
