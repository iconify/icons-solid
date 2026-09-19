import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xhyfmjkni.css';
import '../../css/v/vat54uk9l.css';
import '../../css/z/zig4gxk6x.css';
import '../../css/n/njj_g5b_y.css';
import '../../css/x/xpzn8kbfg.css';
import '../../css/q/qcn8mdrrb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZP2TodMn"><g class="ft5dv1b6b"><path class="xhyfmjkni"/><path class="vat54uk9l"/><path class="zig4gxk6x"/><path class="njj_g5b_y"/><circle transform="rotate(35.072 38.356 7.483)" class="xpzn8kbfg"/><circle transform="rotate(35.072 40.81 9.206)" class="qcn8mdrrb"/></g></mask></defs><path mask="url(#SVGZP2TodMn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:turkey"} {...others} />);
}

export default Component;
