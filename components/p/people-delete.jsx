import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/nzul_zbqb.css';
import '../../css/y/yy1-npbji.css';
import '../../css/d/d_6oo4vix.css';
import '../../css/t/tsr0sjbtq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="nzul_zbqb"/><path class="yy1-npbji"/><path class="d_6oo4vix"/><path class="tsr0sjbtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:people-delete"} {...others} />);
}

export default Component;
