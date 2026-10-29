import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jpdwfrq2v.css';
import '../../css/d/dlyepyb7g.css';
import '../../css/n/ndmv4-gaq.css';
import '../../css/z/zs5jysiem.css';
import '../../css/p/ph0xacbos.css';
import '../../css/c/c0gamrbdj.css';
import '../../css/q/q-trykbql.css';
import '../../css/e/e-s_t6h4k.css';
import '../../css/o/oeeurub3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jpdwfrq2v wm-shadow"/><path class="dlyepyb7g wm-shadow"/><path class="ndmv4-gaq"/><path class="zs5jysiem"/><path class="ph0xacbos"/><path class="c0gamrbdj"/><path class="q-trykbql wm-shine"/><path class="e-s_t6h4k wm-shine"/><path class="oeeurub3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:git-fork"} {...others} />);
}

export default Component;
