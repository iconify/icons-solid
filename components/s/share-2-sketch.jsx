import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r8kxqubna.css';
import '../../css/r/r48fovbmg.css';
import '../../css/c/csu1dprkm.css';
import '../../css/v/vzy9orbpl.css';
import '../../css/y/ye1kwvzpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="r8kxqubna"/><path class="r48fovbmg wm-k"/><path class="csu1dprkm wm-a"/><path class="vzy9orbpl wm-k"/><path class="wm-a ye1kwvzpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:share-2-sketch"} {...others} />);
}

export default Component;
