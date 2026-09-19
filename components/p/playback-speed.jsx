import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3_8jwp2c.css';
import '../../css/a/acs8qldpc.css';
import '../../css/b/b29-gmble.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="k3_8jwp2c"/><path class="acs8qldpc"/><path class="b29-gmble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:playback-speed"} {...others} />);
}

export default Component;
