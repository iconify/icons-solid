import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/k5pevcbvc.css';
import '../../css/j/jktlcixdp.css';
import '../../css/n/nva12x-3a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="k5pevcbvc"/><path class="jktlcixdp"/><path class="nva12x-3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:dog-zodiac"} {...others} />);
}

export default Component;
