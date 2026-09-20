import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/xsf_37zzi.css';
import '../../css/d/dj9cxyb_u.css';
import '../../css/i/iiz65dbkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="xsf_37zzi"/><path class="dj9cxyb_u"/><path class="iiz65dbkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:drone"} {...others} />);
}

export default Component;
