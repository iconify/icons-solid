import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jrp21-l0v.css';
import '../../css/t/ttwa5ubjw.css';
import '../../css/x/xzymugb3i.css';
import '../../css/k/kqrdbispo.css';
import '../../css/q/qpcpoabzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jrp21-l0v"/><path class="ttwa5ubjw"/><path class="xzymugb3i"/><path class="kqrdbispo"/><path class="qpcpoabzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:empty-wallet-change"} {...others} />);
}

export default Component;
