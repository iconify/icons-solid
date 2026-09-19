import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nzul_zbqb.css';
import '../../css/s/spjlgoc2c.css';
import '../../css/n/n1n3-fbiu.css';
import '../../css/a/a9jb4ybyn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nzul_zbqb"/><path class="spjlgoc2c"/><path class="n1n3-fbiu"/><path class="a9jb4ybyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:people-speak"} {...others} />);
}

export default Component;
