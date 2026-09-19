import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o79otobmw.css';
import '../../css/l/lj6gkevac.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="o79otobmw"/><path class="lj6gkevac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:the-single-shoulder-bag"} {...others} />);
}

export default Component;
