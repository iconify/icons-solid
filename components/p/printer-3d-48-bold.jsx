import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at2po_xba.css';
import '../../css/y/ynodcdbwu.css';
import '../../css/b/b_ldx5doh.css';
import '../../css/x/x19sclg2p.css';
import '../../css/h/hdd927_vo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="at2po_xba"/><path class="ynodcdbwu"/><path class="b_ldx5doh"/><path class="x19sclg2p"/><path class="hdd927_vo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:printer-3d-48-bold"} {...others} />);
}

export default Component;
