import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/p2qes6yjx.css';
import '../../css/z/zwzneibzu.css';
import '../../css/c/c85xlhb2g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="p2qes6yjx"/><path class="zwzneibzu"/><path class="c85xlhb2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:increase"} {...others} />);
}

export default Component;
