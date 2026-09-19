import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/i/ign1pvbwc.css';
import '../../css/z/z9bbxfbbs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="ign1pvbwc"/><path class="z9bbxfbbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sandals"} {...others} />);
}

export default Component;
