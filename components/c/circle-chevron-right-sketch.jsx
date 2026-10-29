import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9s-i6b7w.css';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xr_-rdb-r.css';
import '../../css/i/ig162ubki.css';
import '../../css/g/gpiccu5ma.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGDMp0kepX" class="y9s-i6b7w"/></defs><g class="tczw_hbsg"><path class="wm-deco xr_-rdb-r"/><use href="#SVGDMp0kepX" class="ig162ubki wm-k"/><use href="#SVGDMp0kepX" class="wm-k"/><path class="gpiccu5ma wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-chevron-right-sketch"} {...others} />);
}

export default Component;
