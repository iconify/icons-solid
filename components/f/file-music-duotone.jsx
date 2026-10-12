import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oex-v6qpt.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgr5erb2q.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/o/o8adm_bcf.css';
import '../../css/e/e3fsewyjy.css';
import '../../css/k/ka8_oubga.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGrKbPVckp" class="oex-v6qpt"/></defs><g class="ft5dv1b6b"><path class="tgr5erb2q"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="o8adm_bcf"/><use href="#SVGrKbPVckp" class="e3fsewyjy"/><use href="#SVGrKbPVckp" class="e3fsewyjy"/><path class="ka8_oubga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-music-duotone"} {...others} />);
}

export default Component;
