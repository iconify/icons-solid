import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d3509cqfa.css';
import '../../css/m/mk_2-uu6l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="d3509cqfa"/><path class="mk_2-uu6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:upload-two"} {...others} />);
}

export default Component;
