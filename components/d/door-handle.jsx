import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eme4c3hbl.css';
import '../../css/g/grjaxzi4b.css';
import '../../css/n/nk07rpvti.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="eme4c3hbl"/><path class="grjaxzi4b"/><path class="nk07rpvti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:door-handle"} {...others} />);
}

export default Component;
