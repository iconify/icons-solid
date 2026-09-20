import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/s_lzifb-a.css';
import '../../css/i/ikn_avwec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="s_lzifb-a"/><path class="ikn_avwec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:tea-cup"} {...others} />);
}

export default Component;
