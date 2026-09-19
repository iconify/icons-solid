import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxlvjrbzv.css';
import '../../css/g/gafn4lbls.css';
import '../../css/i/iuzb74iyl.css';
import '../../css/v/v0vmgxydm.css';
import '../../css/r/r0vpilb2z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xxlvjrbzv"/><path class="gafn4lbls"/><path class="iuzb74iyl"/><path class="v0vmgxydm"/><path class="r0vpilb2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:headset-one"} {...others} />);
}

export default Component;
