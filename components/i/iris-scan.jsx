import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/q/q25skokes.css';
import '../../css/t/tbe3lg-0g.css';
import '../../css/z/zev8rnbef.css';
import '../../css/v/v_bm-wbvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="q25skokes"/><path class="tbe3lg-0g"/><path class="zev8rnbef"/><path class="v_bm-wbvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:iris-scan"} {...others} />);
}

export default Component;
