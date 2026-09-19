import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/ur6eolbxm.css';
import '../../css/h/h276utioe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ur6eolbxm"/><path class="h276utioe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:fog"} {...others} />);
}

export default Component;
