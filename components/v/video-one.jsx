import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pw0h5xb-x.css';
import '../../css/a/arpc54blb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="pw0h5xb-x"/><circle class="arpc54blb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:video-one"} {...others} />);
}

export default Component;
