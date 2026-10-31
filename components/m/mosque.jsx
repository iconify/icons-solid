import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_b2u3bml.css';
import '../../css/b/bjt2xg_ai.css';
import '../../css/k/knryz1g7k.css';
import '../../css/c/cd09rjbug.css';
import '../../css/s/skhkclb-v.css';
import '../../css/u/ubl97pb2p.css';
import '../../css/z/z0pza4b_o.css';
import '../../css/j/j2ms7yfrh.css';
import '../../css/e/e-09sabmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n_b2u3bml wm-k"/><path class="bjt2xg_ai wm-a"/><path class="knryz1g7k wm-s"/><path class="cd09rjbug wm-k"/><path class="skhkclb-v wm-a"/><path class="ubl97pb2p wm-s"/><path class="wm-shadow z0pza4b_o"/><path class="j2ms7yfrh wm-shine"/><path class="e-09sabmu wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:mosque"} {...others} />);
}

export default Component;
