import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ts4a05e5g.css';
import '../../css/g/gijz_op7m.css';
import '../../css/j/jzx9dtb-z.css';
import '../../css/o/on9e2bbpp.css';
import '../../css/q/qcjneso9d.css';
import '../../css/h/hlausybap.css';
import '../../css/a/aoo4j1dap.css';
import '../../css/y/ycnylkzng.css';
import '../../css/e/ep_ad20bw.css';
import '../../css/j/jac9qbbxu.css';
import '../../css/a/acir9ab0w.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)"><path class="ts4a05e5g"/><path class="gijz_op7m"/><path class="jzx9dtb-z"/><path class="on9e2bbpp"/><g class="qcjneso9d"><path class="hlausybap"/><path class="aoo4j1dap"/></g><g class="qcjneso9d"><path class="ycnylkzng"/><path class="ep_ad20bw"/></g><path class="jac9qbbxu"/><path class="acir9ab0w"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:unbuild"} {...others} />);
}

export default Component;
