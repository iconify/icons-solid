import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zistk-b0s.css';
import '../../css/i/iarkgub8m.css';
import '../../css/z/za0gmsbht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zistk-b0s"/><path class="iarkgub8m"/><path class="za0gmsbht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:message-square-reply"} {...others} />);
}

export default Component;
