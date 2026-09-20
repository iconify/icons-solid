import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/srf9cpbdl.css';
import '../../css/e/e1-t38bgi.css';
import '../../css/w/wzeaelb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="srf9cpbdl"/><path class="e1-t38bgi"/><path class="wzeaelb-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:sound-recognition-search"} {...others} />);
}

export default Component;
