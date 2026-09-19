import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/ayn2_qbyg.css';
import '../../css/i/iaagr_7_e.css';
import '../../css/g/gj4zck10w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ayn2_qbyg"/><path class="iaagr_7_e"/><path class="gj4zck10w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mayura-gesture"} {...others} />);
}

export default Component;
