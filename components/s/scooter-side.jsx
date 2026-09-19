import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-t_zcckg.css';
import '../../css/f/f1y9x1s5l.css';
import '../../css/m/m39rj8t-w.css';
import '../../css/i/ibcrsvf7d.css';
import '../../css/f/f5fpftb0s.css';
import '../../css/m/mz_z0acoa.css';
import '../../css/c/cjkvz9bgq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="s-t_zcckg"/><path clip-rule="evenodd" class="f1y9x1s5l"/><path class="m39rj8t-w"/><rect class="ibcrsvf7d"/><path class="f5fpftb0s"/><path class="mz_z0acoa"/><path class="cjkvz9bgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:scooter-side"} {...others} />);
}

export default Component;
