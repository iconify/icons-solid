import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxf-20o7g.css';
import '../../css/h/hf9hjubbb.css';
import '../../css/v/v40ferb2d.css';
import '../../css/q/qpihbabdw.css';
import '../../css/r/rp2yepuyq.css';
import '../../css/h/hz0hixefa.css';
import '../../css/e/e7oubpr3r.css';
import '../../css/l/lg4vs7ace.css';
import '../../css/h/h702qabki.css';
import '../../css/n/naz-dubnz.css';
import '../../css/n/nvjzclqox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxf-20o7g"/><path class="hf9hjubbb"/><path clip-rule="evenodd" class="v40ferb2d"/><path class="qpihbabdw"/><path class="rp2yepuyq"/><path clip-rule="evenodd" class="hz0hixefa"/><path class="e7oubpr3r"/><path class="lg4vs7ace"/><path class="h702qabki"/><path clip-rule="evenodd" class="naz-dubnz"/><path clip-rule="evenodd" class="nvjzclqox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:trc"} {...others} />);
}

export default Component;
