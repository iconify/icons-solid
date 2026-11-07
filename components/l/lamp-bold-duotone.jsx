import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wru2n0bcc.css';
import '../../css/r/r25dsl2cl.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/vrpmv5bjw.css';
import '../../css/h/hgqe7ndyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wru2n0bcc"/><path class="r25dsl2cl"/><g class="xtpeb-edw"><path class="vrpmv5bjw"/><path class="hgqe7ndyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lamp-bold-duotone"} {...others} />);
}

export default Component;
