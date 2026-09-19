import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2_6ab4it.css';
import '../../css/e/e8i0a8b0w.css';
import '../../css/e/e7ehw2nvg.css';
import '../../css/p/pd98uok3k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="n2_6ab4it"/><path class="e8i0a8b0w"/><path class="e7ehw2nvg"/><circle class="pd98uok3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rabbit-zodiac"} {...others} />);
}

export default Component;
