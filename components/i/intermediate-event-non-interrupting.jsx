import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf539cbsg.css';
import '../../css/g/gzff54bpk.css';
import '../../css/u/ucy902b6e.css';

const viewBox = {"width":2048,"height":2048};
const content = `<g transform="translate(0 995.638)" class="nf539cbsg"><circle class="gzff54bpk"/><circle class="ucy902b6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:intermediate-event-non-interrupting"} {...others} />);
}

export default Component;
