import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb-03yjgh.css';
import '../../css/l/lpusaod-u.css';
import '../../css/z/zwuq-acvx.css';
import '../../css/i/i8tlx0d3d.css';
import '../../css/q/q8zgztb-h.css';
import '../../css/h/h5lx_ullk.css';
import '../../css/i/ihudml0xo.css';
import '../../css/p/pvmboh74i.css';
import '../../css/t/t9tiwfbzh.css';
import '../../css/h/hdlhmmbrm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jb-03yjgh"/><path class="lpusaod-u"/><path class="zwuq-acvx"/><path class="i8tlx0d3d"/><path class="q8zgztb-h"/><path clip-rule="evenodd" class="h5lx_ullk"/><path class="ihudml0xo"/><path class="pvmboh74i"/><path clip-rule="evenodd" class="t9tiwfbzh"/><path class="hdlhmmbrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:dartboard-duo"} {...others} />);
}

export default Component;
