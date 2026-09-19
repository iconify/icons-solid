import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-zrasb2p.css';
import '../../css/n/nra5i0lcv.css';
import '../../css/d/db01ejbqz.css';
import '../../css/h/hxup9ttjd.css';
import '../../css/w/ws_5ymzzd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzj025GLW"><g class="ft5dv1b6b"><path class="g-zrasb2p"/><path class="nra5i0lcv"/><circle transform="rotate(90 34 34)" class="db01ejbqz"/><path class="hxup9ttjd"/><circle class="ws_5ymzzd"/></g></mask></defs><path mask="url(#SVGzj025GLW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:abnormal"} {...others} />);
}

export default Component;
