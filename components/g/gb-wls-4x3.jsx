import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekpszibqm.css';
import '../../css/d/damb695lr.css';
import '../../css/y/y66hika0x.css';
import '../../css/q/qiawmgb3p.css';
import '../../css/c/cqqtygbwx.css';
import '../../css/k/kpsrfjbba.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="ekpszibqm"/><path class="damb695lr"/><g class="y66hika0x"><path class="qiawmgb3p"/><path class="cqqtygbwx"/><path class="kpsrfjbba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gb-wls-4x3"} {...others} />);
}

export default Component;
