import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/x-23gyxcy.css';
import '../../css/a/alyo7h_ef.css';
import '../../css/p/p-vdd5bma.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="x-23gyxcy"/><path class="alyo7h_ef"/><path class="p-vdd5bma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:flip-vertically"} {...others} />);
}

export default Component;
