import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xgze9ibfr.css';
import '../../css/m/m249w6bfo.css';
import '../../css/t/tu5qhwb4p.css';
import '../../css/b/bqabc6niv.css';
import '../../css/n/nxlx5ur8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="xgze9ibfr"/><path class="m249w6bfo"/><path class="tu5qhwb4p wm-k"/><path class="bqabc6niv wm-a"/><path class="nxlx5ur8l wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:scissors"} {...others} />);
}

export default Component;
