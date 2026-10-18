import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6w4h3bjm.css';
import '../../css/t/t9xuwrmnc.css';
import '../../css/z/zix8n4brm.css';
import '../../css/w/wg57-gbbs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l6w4h3bjm"/><path class="t9xuwrmnc"/><path class="zix8n4brm"/><path class="wg57-gbbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-cooling-20"} {...others} />);
}

export default Component;
