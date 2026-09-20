import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dnrxv30hl.css';
import '../../css/p/pyt2z8_qv.css';
import '../../css/x/xgtgfnecr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dnrxv30hl"/><path class="pyt2z8_qv"/><path class="xgtgfnecr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:box-tick"} {...others} />);
}

export default Component;
