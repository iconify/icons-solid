import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/r/raxokfpjg.css';
import '../../css/r/rctazlpyi.css';
import '../../css/j/je1iedc_r.css';
import '../../css/r/rwncuda5l.css';
import '../../css/j/jri1li39f.css';
import '../../css/s/ssfpblcca.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="raxokfpjg"/><circle class="rctazlpyi"/><circle class="je1iedc_r"/><circle class="rwncuda5l"/><path class="jri1li39f"/><path class="ssfpblcca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tree-diagram"} {...others} />);
}

export default Component;
