import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/plv0bcc_m.css';
import '../../css/a/aezdy9b0j.css';
import '../../css/v/vway3bbat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="plv0bcc_m"/><path class="aezdy9b0j"/><path class="vway3bbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:skull-2"} {...others} />);
}

export default Component;
