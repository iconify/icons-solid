import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5_5ntbol.css';
import '../../css/j/jko7jdb1p.css';
import '../../css/a/aferowjho.css';
import '../../css/k/kt0wougqv.css';
import '../../css/k/k1uq304yb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="e5_5ntbol"/><path class="jko7jdb1p"/><rect class="aferowjho"/><path class="kt0wougqv"/><circle transform="matrix(0 -1 -1 0 10 14)" class="k1uq304yb"/><circle transform="matrix(0 -1 -1 0 16 14)" class="k1uq304yb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:locking-web"} {...others} />);
}

export default Component;
