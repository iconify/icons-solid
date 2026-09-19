import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/u/uwawlnb2m.css';
import '../../css/m/mgei9ac2l.css';
import '../../css/j/jkzqwrbvb.css';
import '../../css/h/hnb4rpb4g.css';
import '../../css/k/kv3xb3zql.css';
import '../../css/w/wluw6wbrz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="uwawlnb2m"/><path class="mgei9ac2l"/><path class="jkzqwrbvb"/><path class="hnb4rpb4g"/><path class="kv3xb3zql"/><path class="wluw6wbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:stretching"} {...others} />);
}

export default Component;
