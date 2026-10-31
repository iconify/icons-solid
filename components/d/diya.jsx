import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hbjez4xct.css';
import '../../css/g/gvskrxd1p.css';
import '../../css/b/bs8j54olv.css';
import '../../css/t/tm5myac6r.css';
import '../../css/d/dklh1wbkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hbjez4xct wm-shadow"/><path class="gvskrxd1p"/><path class="bs8j54olv"/><path class="tm5myac6r"/><path class="dklh1wbkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:diya"} {...others} />);
}

export default Component;
