import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nafxc-7ts.css';
import '../../css/r/r2ihd9b-z.css';
import '../../css/l/lh145ac-v.css';
import '../../css/f/fqw_bpbjr.css';
import '../../css/z/zstnnxbez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nafxc-7ts"/><path class="r2ihd9b-z"/><path class="lh145ac-v"/><path class="fqw_bpbjr"/><path class="zstnnxbez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:natural-disaster-volcano"} {...others} />);
}

export default Component;
