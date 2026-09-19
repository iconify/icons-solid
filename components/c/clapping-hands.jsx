import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/geh2k2fjt.css';
import '../../css/h/hfamrj_io.css';
import '../../css/v/vmd06seyc.css';
import '../../css/j/jff6p_bic.css';
import '../../css/n/nq-osyb3u.css';
import '../../css/c/cfx1q448n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="geh2k2fjt"/><path class="hfamrj_io"/><path class="vmd06seyc"/><path class="jff6p_bic"/><path class="nq-osyb3u"/><path class="cfx1q448n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:clapping-hands"} {...others} />);
}

export default Component;
