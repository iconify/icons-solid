import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/z7dq4587f.css';
import '../../css/a/at5cfwz_m.css';
import '../../css/v/vn_agwb7j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="z7dq4587f"/><path class="at5cfwz_m"/><path class="vn_agwb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:message-security"} {...others} />);
}

export default Component;
