import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2j7ghxra.css';
import '../../css/a/at_ainn6c.css';
import '../../css/o/or_2qzl_r.css';
import '../../css/c/chc7kx78o.css';
import '../../css/m/m704azxzk.css';
import '../../css/h/h4fpticvy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="b2j7ghxra"/><path clip-rule="evenodd" class="at_ainn6c"/><path clip-rule="evenodd" class="or_2qzl_r"/><path class="chc7kx78o"/><path clip-rule="evenodd" class="m704azxzk"/><path clip-rule="evenodd" class="h4fpticvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mobile-tablet-outline"} {...others} />);
}

export default Component;
