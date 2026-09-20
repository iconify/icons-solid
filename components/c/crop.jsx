import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/w/wgg_49bkt.css';
import '../../css/d/d4-4yzbjm.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="wgg_49bkt"/><path class="d4-4yzbjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:crop"} {...others} />);
}

export default Component;
