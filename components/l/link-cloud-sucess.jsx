import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/v7vw7i9ke.css';
import '../../css/a/abxymac_o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="v7vw7i9ke"/><path class="abxymac_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:link-cloud-sucess"} {...others} />);
}

export default Component;
