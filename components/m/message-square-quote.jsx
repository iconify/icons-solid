import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e84ca_bra.css';
import '../../css/z/zistk-b0s.css';
import '../../css/l/l6vr66box.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e84ca_bra"/><path class="zistk-b0s"/><path class="l6vr66box"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:message-square-quote"} {...others} />);
}

export default Component;
