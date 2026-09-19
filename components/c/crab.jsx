import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/ronjz08st.css';
import '../../css/a/a8s_bgb4s.css';
import '../../css/e/e92ucll6c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ronjz08st"/><rect class="a8s_bgb4s"/><path class="e92ucll6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:crab"} {...others} />);
}

export default Component;
