import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hu0864bjy.css';
import '../../css/o/o-jk2xaue.css';
import '../../css/w/wg2oucbbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hu0864bjy"/><path class="o-jk2xaue wm-k"/><path class="wg2oucbbj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:microwave-sketch"} {...others} />);
}

export default Component;
