import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/abaxk8rxi.css';
import '../../css/b/beli9e-kr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="abaxk8rxi"/><path class="beli9e-kr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:mirror"} {...others} />);
}

export default Component;
