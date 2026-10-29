import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n6cy9hz8y.css';
import '../../css/f/fr25ybbad.css';
import '../../css/h/h6orqybed.css';
import '../../css/o/o3d4k3blk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n6cy9hz8y"/><path class="fr25ybbad"/><path class="h6orqybed wm-a"/><path class="o3d4k3blk wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:files-sketch"} {...others} />);
}

export default Component;
