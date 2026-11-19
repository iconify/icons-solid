import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oel9y308d.css';
import '../../css/v/vuq108bez.css';
import '../../css/y/yr6w2ubjm.css';
import '../../css/t/t8cbzh0ll.css';
import '../../css/j/jqn2lwh2g.css';
import '../../css/b/bp1193psv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oel9y308d"/><path class="vuq108bez"/><path class="yr6w2ubjm"/><path class="t8cbzh0ll"/><path class="jqn2lwh2g"/><path class="bp1193psv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:headset"} {...others} />);
}

export default Component;
