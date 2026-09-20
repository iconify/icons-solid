import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x4l2r92ma.css';
import '../../css/w/wmmfz3bcb.css';
import '../../css/a/arcgi7ubs.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="x4l2r92ma"/><path class="wmmfz3bcb"/><path class="arcgi7ubs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:information-chat-right"} {...others} />);
}

export default Component;
