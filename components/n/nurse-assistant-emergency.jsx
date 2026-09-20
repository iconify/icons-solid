import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vn-8__b9g.css';
import '../../css/a/ajar44b3m.css';
import '../../css/w/wyrl89b3l.css';
import '../../css/v/v_dbdgb0j.css';
import '../../css/d/d_9xukbgt.css';
import '../../css/w/wu00vmwtq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vn-8__b9g"/><path class="ajar44b3m"/><path class="wyrl89b3l"/><path class="v_dbdgb0j"/><path class="d_9xukbgt"/><path class="wu00vmwtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:nurse-assistant-emergency"} {...others} />);
}

export default Component;
