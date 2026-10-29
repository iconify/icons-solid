import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z60d_ef2w.css';
import '../../css/d/di5c5tble.css';
import '../../css/t/t2c-kvf-m.css';
import '../../css/n/nklau5bma.css';
import '../../css/a/azzxsjbxv.css';
import '../../css/k/keq12gaem.css';
import '../../css/h/h5-ybjiiz.css';
import '../../css/d/d7avgrwhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow z60d_ef2w"/><path class="di5c5tble wm-k"/><path class="t2c-kvf-m wm-k"/><path class="nklau5bma wm-k"/><path class="azzxsjbxv wm-k"/><path class="keq12gaem wm-k"/><path class="h5-ybjiiz wm-shine"/><path class="d7avgrwhs wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:circle-chevron-left"} {...others} />);
}

export default Component;
