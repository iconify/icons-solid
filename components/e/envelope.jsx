import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsmu98p6c.css';
import '../../css/h/hs-tb-btz.css';
import '../../css/m/mc75m8d8n.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="xsmu98p6c"/><path class="hs-tb-btz"/><path class="mc75m8d8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:envelope"} {...others} />);
}

export default Component;
