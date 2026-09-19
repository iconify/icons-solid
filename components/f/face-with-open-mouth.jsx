import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n3z40igbl.css';
import '../../css/z/zyv_r2dww.css';
import '../../css/p/pwr6saczv.css';
import '../../css/v/v9uf5bcgz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="n3z40igbl"/><path class="zyv_r2dww"/><path class="pwr6saczv"/><path class="v9uf5bcgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:face-with-open-mouth"} {...others} />);
}

export default Component;
