import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/d7eu1_b8t.css';
import '../../css/d/dds2nibls.css';
import '../../css/x/xgrraabkr.css';
import '../../css/g/gv3k4fbqf.css';
import '../../css/z/zkwsyactc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="d7eu1_b8t"/><path class="dds2nibls"/><path class="xgrraabkr"/><path class="gv3k4fbqf"/><path class="zkwsyactc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:menu-fold-one"} {...others} />);
}

export default Component;
