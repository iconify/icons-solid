import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e9bm3i9jh.css';
import '../../css/a/a4ms69b5n.css';
import '../../css/b/bf0_kdbgt.css';
import '../../css/t/trdpk-b6y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="e9bm3i9jh"/><circle class="a4ms69b5n"/><circle class="bf0_kdbgt"/><circle class="trdpk-b6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:anchor-round"} {...others} />);
}

export default Component;
