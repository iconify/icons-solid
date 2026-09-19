import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h_bs_1b0g.css';
import '../../css/d/dfz3wrn4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="h_bs_1b0g"/><path class="dfz3wrn4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:folder-code-one"} {...others} />);
}

export default Component;
