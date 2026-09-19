import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/ualx4gbii.css';
import '../../css/n/naha7nbni.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ualx4gbii"/><path class="naha7nbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:fork-spoon"} {...others} />);
}

export default Component;
