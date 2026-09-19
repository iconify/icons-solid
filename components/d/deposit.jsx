import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/do939nu1l.css';
import '../../css/r/rw9q-f79i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="do939nu1l"/><path class="rw9q-f79i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:deposit"} {...others} />);
}

export default Component;
