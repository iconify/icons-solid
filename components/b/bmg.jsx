import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gilpv_ahg.css';
import '../../css/w/wo0pf4bui.css';
import '../../css/z/zqwds7qfz.css';
import '../../css/a/aryrtpe7w.css';
import '../../css/z/zy2q3v_mu.css';

const viewBox = {"width":105,"height":35};
const content = `<g class="gilpv_ahg"><path clip-rule="evenodd" class="wo0pf4bui"/><path class="zqwds7qfz"/><path class="aryrtpe7w"/><path class="zy2q3v_mu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bmg"} {...others} />);
}

export default Component;
