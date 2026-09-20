import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/yujhm0l1u.css';
import '../../css/m/mvyfrqb8y.css';
import '../../css/d/dys8wbcuf.css';
import '../../css/b/b-kt9ugcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><circle class="yujhm0l1u"/><path class="mvyfrqb8y"/><rect class="dys8wbcuf"/><rect class="b-kt9ugcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:happy"} {...others} />);
}

export default Component;
