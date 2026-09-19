import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qepuaqbvx.css';
import '../../css/a/ahhtygbfj.css';
import '../../css/y/ygmil-bru.css';
import '../../css/n/n78cw4bmy.css';

const viewBox = {"width":2000,"height":2000};
const content = `<g class="qepuaqbvx"><path class="ahhtygbfj"/><path class="ygmil-bru"/><path class="n78cw4bmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:user"} {...others} />);
}

export default Component;
