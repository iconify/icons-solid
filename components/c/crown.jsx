import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-rofk-2e.css';
import '../../css/x/xjva70f_t.css';
import '../../css/f/febthzbpd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q-rofk-2e"/><rect class="xjva70f_t"/><path clip-rule="evenodd" class="febthzbpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:crown"} {...others} />);
}

export default Component;
