import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qdjo4sv5r.css';
import '../../css/v/v4mvfkyzo.css';
import '../../css/f/fa1_uabup.css';
import '../../css/i/i13dvsb0b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcGocJPTs"><g class="ft5dv1b6b"><path class="qdjo4sv5r"/><path class="v4mvfkyzo"/><path class="fa1_uabup"/><circle class="i13dvsb0b"/></g></mask></defs><path mask="url(#SVGcGocJPTs)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:slave"} {...others} />);
}

export default Component;
