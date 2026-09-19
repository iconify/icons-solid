import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/m9gak166t.css';
import '../../css/n/nzzcombqn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="m9gak166t"/><path class="nzzcombqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-hash-one"} {...others} />);
}

export default Component;
