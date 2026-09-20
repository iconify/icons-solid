import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iiu1_w9vl.css';
import '../../css/c/cnz8bpbxw.css';
import '../../css/t/tbjv4ibsv.css';
import '../../css/h/hfrlvqbnu.css';
import '../../css/q/q8y69_bfd.css';
import '../../css/w/w6gxrfbvt.css';
import '../../css/q/qtfib3gjy.css';
import '../../css/z/zcl-b2bxt.css';
import '../../css/l/lo92blv1a.css';
import '../../css/q/q5wghgbuk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iiu1_w9vl"/><path class="cnz8bpbxw"/><path class="tbjv4ibsv"/><path class="hfrlvqbnu"/><path class="q8y69_bfd"/><path class="w6gxrfbvt"/><path class="qtfib3gjy"/><path class="zcl-b2bxt"/><path class="lo92blv1a"/><path class="q5wghgbuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:network-browser"} {...others} />);
}

export default Component;
