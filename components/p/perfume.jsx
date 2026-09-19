import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bt0_qpv5c.css';
import '../../css/a/asb5nb7rr.css';
import '../../css/x/xcqey-j4d.css';
import '../../css/q/q4kdvccmb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="bt0_qpv5c"/><rect class="asb5nb7rr"/><path class="xcqey-j4d"/><path class="q4kdvccmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:perfume"} {...others} />);
}

export default Component;
