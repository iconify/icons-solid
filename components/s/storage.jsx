import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rnz55r2wt.css';
import '../../css/b/blcntivod.css';
import '../../css/x/x5jwzibyq.css';
import '../../css/s/sjukqcomr.css';

const viewBox = {"width":16,"height":16};
const content = `<g transform="translate(0 2)" class="n1lsf0bnc"><path class="rnz55r2wt"/><circle class="blcntivod"/><circle class="x5jwzibyq"/><path class="sjukqcomr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:storage"} {...others} />);
}

export default Component;
