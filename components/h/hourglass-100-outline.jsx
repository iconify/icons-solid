import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sy25vmbhr.css';
import '../../css/v/vvhyatv6v.css';
import '../../css/b/bp5fwubdt.css';
import '../../css/f/f10zp4qwq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="sy25vmbhr"/><path clip-rule="evenodd" class="vvhyatv6v"/><path class="bp5fwubdt"/><path clip-rule="evenodd" class="f10zp4qwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hourglass-100-outline"} {...others} />);
}

export default Component;
