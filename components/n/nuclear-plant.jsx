import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q2edn0hux.css';
import '../../css/b/b_jybabkd.css';
import '../../css/k/k4w29eh4l.css';
import '../../css/w/wphq51b4b.css';
import '../../css/h/h26ybb6-w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="q2edn0hux"/><path class="b_jybabkd"/><path class="k4w29eh4l"/><path class="wphq51b4b"/><circle class="h26ybb6-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:nuclear-plant"} {...others} />);
}

export default Component;
