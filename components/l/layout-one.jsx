import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/a/am1igebwo.css';
import '../../css/y/yeo6-kifb.css';
import '../../css/q/qyy9o_btf.css';
import '../../css/l/l6pgklkvy.css';
import '../../css/y/yfm2a_b8o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="am1igebwo"/><path class="yeo6-kifb"/><path class="qyy9o_btf"/><path class="l6pgklkvy"/><path class="yfm2a_b8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:layout-one"} {...others} />);
}

export default Component;
