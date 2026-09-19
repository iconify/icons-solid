import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/u3-ch6bdv.css';
import '../../css/k/k0prkxbkx.css';
import '../../css/w/w8f10i8_e.css';
import '../../css/s/stfab34st.css';
import '../../css/e/e5on5f1qf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="u3-ch6bdv"/><path class="k0prkxbkx"/><path class="w8f10i8_e"/><path class="stfab34st"/><path class="e5on5f1qf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fingerprint-three"} {...others} />);
}

export default Component;
