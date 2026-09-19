import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r5fs5gbsr.css';
import '../../css/c/cjkvecb0a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect transform="rotate(45 24.762 3.243)" class="r5fs5gbsr"/><path class="cjkvecb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tray"} {...others} />);
}

export default Component;
