import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/q/q66nlkbwx.css';
import '../../css/p/p0ofpd-bo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="q66nlkbwx"/><path class="p0ofpd-bo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:page-setting"} {...others} />);
}

export default Component;
