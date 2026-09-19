import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/ljakav41z.css';
import '../../css/g/gplkv5ukx.css';
import '../../css/y/yf-u9nb-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ljakav41z"/><path class="gplkv5ukx"/><path class="yf-u9nb-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:spaceship"} {...others} />);
}

export default Component;
