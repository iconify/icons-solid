import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eckgr_guk.css';
import '../../css/h/hyf600jeo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="eckgr_guk"/><path class="hyf600jeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rectangle-tear"} {...others} />);
}

export default Component;
