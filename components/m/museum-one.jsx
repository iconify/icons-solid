import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/o/ow5qbpbcb.css';
import '../../css/c/csjv4gbyd.css';
import '../../css/d/d2n7jqv5v.css';
import '../../css/r/r-sfie-5l.css';
import '../../css/z/zab0952kw.css';
import '../../css/y/yfpqo2wsi.css';
import '../../css/e/euqtv0vvh.css';
import '../../css/w/wien9_z2x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ow5qbpbcb"/><path class="csjv4gbyd"/><path class="d2n7jqv5v"/><path class="r-sfie-5l"/><path class="zab0952kw"/><path class="yfpqo2wsi"/><path class="euqtv0vvh"/><rect class="wien9_z2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:museum-one"} {...others} />);
}

export default Component;
