import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2pu023ku.css';
import '../../css/a/a2m558joh.css';
import '../../css/r/rjvlqqbhv.css';
import '../../css/z/zxl5i3ubv.css';
import '../../css/x/x0s0sj97c.css';
import '../../css/r/rvxd-jbwx.css';
import '../../css/w/whovlbb1g.css';
import '../../css/g/gcp-8lbmm.css';
import '../../css/g/ge59qfbxn.css';
import '../../css/l/ltaml0bkv.css';
import '../../css/v/vvsp8rb3j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="x2pu023ku"/><path clip-rule="evenodd" class="a2m558joh"/><path class="rjvlqqbhv"/><path class="zxl5i3ubv"/><path class="x0s0sj97c"/><path class="rvxd-jbwx"/><path class="whovlbb1g"/><path class="gcp-8lbmm"/><path class="ge59qfbxn"/><path class="ltaml0bkv"/><path class="vvsp8rb3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:lotus"} {...others} />);
}

export default Component;
