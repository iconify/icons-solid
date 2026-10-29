import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lf-s-9vum.css';
import '../../css/t/t345sdvpm.css';
import '../../css/t/t218te2ox.css';
import '../../css/j/j_gulvb5c.css';
import '../../css/d/djdssxezq.css';
import '../../css/w/wv7-erecy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="lf-s-9vum wm-deco"/><path class="t345sdvpm wm-deco"/><path class="t218te2ox wm-deco"/><path class="j_gulvb5c wm-k"/><path class="djdssxezq wm-a"/><path class="wm-k wv7-erecy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-owl-blueprint"} {...others} />);
}

export default Component;
