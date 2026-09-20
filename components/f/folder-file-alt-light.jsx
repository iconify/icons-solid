import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xrfgp0bpp.css';
import '../../css/v/vc02c23rw.css';
import '../../css/x/xtch0nbcn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="xrfgp0bpp"/><path class="vc02c23rw"/><path class="xtch0nbcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-file-alt-light"} {...others} />);
}

export default Component;
