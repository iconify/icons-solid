import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea90dub6v.css';
import '../../css/g/gbci9hyta.css';
import '../../css/e/ej0drdrvm.css';
import '../../css/k/ks_49ybnb.css';
import '../../css/o/o_nlurf6b.css';
import '../../css/j/jiw1pkbmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ea90dub6v"/><path class="gbci9hyta"/><path class="ej0drdrvm"/><path class="ks_49ybnb"/><path class="o_nlurf6b"/><path class="jiw1pkbmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cassette-2-linear"} {...others} />);
}

export default Component;
