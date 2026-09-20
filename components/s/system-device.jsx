import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqc7n13jo.css';
import '../../css/x/x9c4v8b1c.css';
import '../../css/p/pf2hiil7q.css';
import '../../css/j/jrorbepjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eqc7n13jo"/><path class="x9c4v8b1c"/><path class="pf2hiil7q"/><path class="jrorbepjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-device"} {...others} />);
}

export default Component;
