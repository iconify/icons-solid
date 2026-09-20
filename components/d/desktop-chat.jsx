import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/izj8mqk6b.css';
import '../../css/w/w7li2mbsq.css';
import '../../css/b/b9sguibva.css';
import '../../css/m/mfp69fb3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="izj8mqk6b"/><path class="w7li2mbsq"/><path class="b9sguibva"/><path class="mfp69fb3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:desktop-chat"} {...others} />);
}

export default Component;
