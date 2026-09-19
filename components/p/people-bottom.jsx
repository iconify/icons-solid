import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nzul_zbqb.css';
import '../../css/g/gnkwcac9s.css';
import '../../css/a/a9jb4ybyn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nzul_zbqb"/><path class="gnkwcac9s"/><path class="a9jb4ybyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:people-bottom"} {...others} />);
}

export default Component;
