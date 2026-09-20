import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ef7iwcbpf.css';
import '../../css/x/x5-bpub_f.css';
import '../../css/g/gaj_yvbkp.css';
import '../../css/z/zzp9sd0so.css';
import '../../css/w/wcnzo0buk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ef7iwcbpf"/><path class="x5-bpub_f"/><path class="gaj_yvbkp"/><path class="zzp9sd0so"/><path class="wcnzo0buk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:music-folder-song"} {...others} />);
}

export default Component;
