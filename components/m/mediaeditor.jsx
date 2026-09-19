import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o7gigzb1l.css';
import '../../css/t/tfle2_b_c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="o7gigzb1l"/><path class="tfle2_b_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mediaeditor"} {...others} />);
}

export default Component;
