import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/f/f076djbny.css';
import '../../css/h/hn02xobzk.css';
import '../../css/j/j_f4--j_y.css';
import '../../css/n/nzqluihnj.css';
import '../../css/e/e_llt8bwr.css';
import '../../css/e/etl2ikb4v.css';
import '../../css/v/v4q1e8b0l.css';
import '../../css/r/r9u6z0b_p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="f076djbny"/><path class="hn02xobzk"/><rect class="j_f4--j_y"/><rect class="nzqluihnj"/><path class="e_llt8bwr"/><path class="etl2ikb4v"/><path class="v4q1e8b0l"/><path class="r9u6z0b_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:drone-one"} {...others} />);
}

export default Component;
