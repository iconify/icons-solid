import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vih8ycc5h.css';
import '../../css/n/n0q27-k2k.css';
import '../../css/h/hc2orobam.css';
import '../../css/m/m9kii9b5h.css';
import '../../css/u/u6qcumbqg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vih8ycc5h"/><path class="n0q27-k2k"/><path class="hc2orobam"/><path class="m9kii9b5h"/><path class="u6qcumbqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:nyan-cat"} {...others} />);
}

export default Component;
