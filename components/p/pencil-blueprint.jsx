import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vi60rucln.css';
import '../../css/y/ymmgvcc1u.css';
import '../../css/z/z0_k-abss.css';
import '../../css/s/sj48eo8qr.css';
import '../../css/j/jm-o6kx0w.css';
import '../../css/l/lommftbon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vi60rucln wm-deco"/><path class="wm-deco ymmgvcc1u"/><path class="wm-deco z0_k-abss"/><path class="sj48eo8qr wm-k"/><path class="jm-o6kx0w wm-a"/><path class="lommftbon wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pencil-blueprint"} {...others} />);
}

export default Component;
