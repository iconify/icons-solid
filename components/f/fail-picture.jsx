import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/vr3z2jdqf.css';
import '../../css/p/pun4r7bvl.css';
import '../../css/m/msyo6pbdb.css';
import '../../css/i/i-w4cbywx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><rect class="vr3z2jdqf"/><path class="pun4r7bvl"/><path class="msyo6pbdb"/><path class="i-w4cbywx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fail-picture"} {...others} />);
}

export default Component;
