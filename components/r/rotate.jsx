import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r4qj22bpz.css';
import '../../css/g/gsaz2lbqg.css';
import '../../css/w/w0tt369dj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="r4qj22bpz"/><path class="gsaz2lbqg"/><path class="w0tt369dj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rotate"} {...others} />);
}

export default Component;
