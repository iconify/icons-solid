import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/q/qxe-g7bgd.css';
import '../../css/c/cgt_ecp0k.css';
import '../../css/h/hnhc6-bsy.css';
import '../../css/e/exuyzw26p.css';
import '../../css/m/m0j6vkbqf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="y6f0jibvm"/><path class="qxe-g7bgd"/><path class="cgt_ecp0k"/><path class="hnhc6-bsy"/><path class="exuyzw26p"/><path class="m0j6vkbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:voice-one"} {...others} />);
}

export default Component;
