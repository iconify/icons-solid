import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ltd0id_pw.css';
import '../../css/n/nwk51vxts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ltd0id_pw"/><path class="nwk51vxts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:facbook-messenger-logo"} {...others} />);
}

export default Component;
