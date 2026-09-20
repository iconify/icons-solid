import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/f6jwgdbmb.css';
import '../../css/v/vbgtpab3l.css';
import '../../css/s/s-fsh86iu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="f6jwgdbmb"/><path class="vbgtpab3l"/><path class="s-fsh86iu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:link-chain"} {...others} />);
}

export default Component;
