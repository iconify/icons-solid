import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w7b7i40wv.css';
import '../../css/o/o452wi0jp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="w7b7i40wv"/><path class="o452wi0jp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:wrong-user"} {...others} />);
}

export default Component;
