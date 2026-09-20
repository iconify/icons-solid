import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ax81fwdcr.css';
import '../../css/p/p9mkjc_jx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ax81fwdcr"/><path class="p9mkjc_jx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:lovely"} {...others} />);
}

export default Component;
