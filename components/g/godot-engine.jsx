import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvf9w4bku.css';
import '../../css/k/k3rbg31ca.css';
import '../../css/x/xceadkbim.css';
import '../../css/u/upb0fubsv.css';
import '../../css/r/rc4cprezw.css';
import '../../css/o/onbsnxmgd.css';
import '../../css/y/yzske9w4k.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><path class="qvf9w4bku"/><path class="k3rbg31ca"/><path class="xceadkbim"/><path class="upb0fubsv"/><path class="rc4cprezw"/><path class="onbsnxmgd"/><path class="yzske9w4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:godot-engine"} {...others} />);
}

export default Component;
