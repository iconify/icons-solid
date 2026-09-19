import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rml6syxed.css';
import '../../css/p/pv0dl6bjc.css';
import '../../css/r/rrbbmlbwz.css';
import '../../css/u/un6xfgbrp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="rml6syxed"/><path class="pv0dl6bjc"/><path class="rrbbmlbwz"/><path class="un6xfgbrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:arnx"} {...others} />);
}

export default Component;
