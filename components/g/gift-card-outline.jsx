import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl3km0pue.css';
import '../../css/m/my6h_actc.css';
import '../../css/c/cbfj9ubdj.css';
import '../../css/b/bpelmrbih.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="bl3km0pue"/><path clip-rule="evenodd" class="my6h_actc"/><path class="cbfj9ubdj"/><path clip-rule="evenodd" class="bpelmrbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gift-card-outline"} {...others} />);
}

export default Component;
