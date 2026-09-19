import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t1bzaidmv.css';
import '../../css/f/fr96r-b4z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="t1bzaidmv"/><path class="fr96r-b4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:dianziqian"} {...others} />);
}

export default Component;
