import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w7b7i40wv.css';
import '../../css/i/i0ds1rbow.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="w7b7i40wv"/><path class="i0ds1rbow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:add-user"} {...others} />);
}

export default Component;
