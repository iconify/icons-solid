import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tratnueqx.css';
import '../../css/e/eveyu6ttl.css';
import '../../css/f/fl0k6192a.css';
import '../../css/q/qcq6u5bdv.css';
import '../../css/l/lp9lpgbgh.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/o/on6f8bc7s.css';
import '../../css/u/uv5toibjy.css';
import '../../css/h/hqu0cacjy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tratnueqx"/><path class="eveyu6ttl"/><path class="fl0k6192a"/><path class="qcq6u5bdv"/><path class="lp9lpgbgh"/><g class="brzn_0bpr"><path class="on6f8bc7s"/><path class="uv5toibjy"/><path class="hqu0cacjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:boomerang"} {...others} />);
}

export default Component;
