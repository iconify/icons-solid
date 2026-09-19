import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ebs_h0bee.css';
import '../../css/b/bihpxacjr.css';
import '../../css/e/eyok3_b1p.css';
import '../../css/h/h701m-n6k.css';
import '../../css/h/h-ks4l-bo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ebs_h0bee"/><path class="bihpxacjr"/><path class="eyok3_b1p"/><path class="h701m-n6k"/><path class="h-ks4l-bo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:overall-reduction"} {...others} />);
}

export default Component;
