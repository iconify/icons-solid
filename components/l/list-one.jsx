import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly6jl_bkj.css';
import '../../css/c/ctq1g0i4q.css';
import '../../css/r/rfbkvllim.css';
import '../../css/k/kji-ofbyx.css';
import '../../css/t/tmpm_6byj.css';
import '../../css/h/h9t6l4bmz.css';
import '../../css/p/pb7vd9b3l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ly6jl_bkj"><path class="ctq1g0i4q"/><path class="rfbkvllim"/><path class="kji-ofbyx"/><circle class="tmpm_6byj"/><circle class="h9t6l4bmz"/><circle class="pb7vd9b3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:list-one"} {...others} />);
}

export default Component;
