import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w-omgbcdx.css';
import '../../css/t/tt7vcqswa.css';
import '../../css/l/lczb851ux.css';
import '../../css/c/c9awzi9ko.css';
import '../../css/t/tzi-ertvs.css';
import '../../css/c/cew0judle.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="w-omgbcdx"/><path class="tt7vcqswa"/><path class="lczb851ux"/><path class="c9awzi9ko"/><path class="tzi-ertvs"/><path class="cew0judle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grip-horizontal-outline"} {...others} />);
}

export default Component;
