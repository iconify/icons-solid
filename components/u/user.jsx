import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w7b7i40wv.css';
import '../../css/z/z6d_ftb-e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="w7b7i40wv"/><path class="z6d_ftb-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:user"} {...others} />);
}

export default Component;
