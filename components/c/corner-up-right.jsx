import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c5568ghva.css';
import '../../css/u/u4d5ulj-m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c5568ghva"/><path class="u4d5ulj-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:corner-up-right"} {...others} />);
}

export default Component;
