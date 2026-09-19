import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hc_1lmbqx.css';
import '../../css/a/azoor3gvj.css';
import '../../css/s/sdbl3ttsf.css';
import '../../css/x/xde-2_bup.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="hc_1lmbqx"/><path class="azoor3gvj"/><path class="sdbl3ttsf"/><path class="xde-2_bup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:future-build-one"} {...others} />);
}

export default Component;
