import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-70sba8t.css';
import '../../css/s/s9xtenb9b.css';
import '../../css/g/g_pe0ebql.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="f-70sba8t"/><path clip-rule="evenodd" class="s9xtenb9b"/><path clip-rule="evenodd" class="g_pe0ebql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:star-half-2"} {...others} />);
}

export default Component;
