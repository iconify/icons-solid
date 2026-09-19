import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nzul_zbqb.css';
import '../../css/h/hda8nzg1d.css';
import '../../css/a/a9jb4ybyn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nzul_zbqb"/><path class="hda8nzg1d"/><path class="a9jb4ybyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:people-top"} {...others} />);
}

export default Component;
