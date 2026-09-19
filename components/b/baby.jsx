import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6gb__bml.css';
import '../../css/z/z4voh_u7c.css';
import '../../css/h/hbjqd6bub.css';
import '../../css/c/cvj_-pbvv.css';
import '../../css/q/qxuh74zwn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h6gb__bml"/><path class="z4voh_u7c"/><path class="hbjqd6bub"/><path clip-rule="evenodd" class="cvj_-pbvv"/><path class="qxuh74zwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:baby"} {...others} />);
}

export default Component;
