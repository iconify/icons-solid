import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6lixabwl.css';
import '../../css/e/enxzbi6mw.css';
import '../../css/w/w0wga4e3s.css';
import '../../css/g/guf5xbclf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h6lixabwl wm-k"/><path class="enxzbi6mw wm-k"/><path class="w0wga4e3s wm-k"/><path class="guf5xbclf wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:plus"} {...others} />);
}

export default Component;
