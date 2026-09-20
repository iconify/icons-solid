import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/q/q5wt2mb5e.css';
import '../../css/o/o2scd7bed.css';
import '../../css/x/xrdbk_vwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="q5wt2mb5e"/><path class="o2scd7bed"/><path class="xrdbk_vwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:copy-link"} {...others} />);
}

export default Component;
