import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tzfd4fb8h.css';
import '../../css/b/b56omhbpq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="tzfd4fb8h"/><path class="b56omhbpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:left-expand"} {...others} />);
}

export default Component;
