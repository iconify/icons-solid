import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xvaisgb6l.css';
import '../../css/p/p8rpo9bbl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="xvaisgb6l"/><path class="p8rpo9bbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:credit"} {...others} />);
}

export default Component;
