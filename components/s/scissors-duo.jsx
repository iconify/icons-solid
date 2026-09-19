import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zttmhdm7h.css';
import '../../css/f/fll8gje-k.css';
import '../../css/c/cwwt87b2f.css';
import '../../css/s/s6k4l3b-m.css';
import '../../css/k/kxu8vjbib.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zttmhdm7h"/><path class="fll8gje-k"/><path clip-rule="evenodd" class="cwwt87b2f"/><path class="s6k4l3b-m"/><path class="kxu8vjbib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:scissors-duo"} {...others} />);
}

export default Component;
