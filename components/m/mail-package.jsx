import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/q9fiilb4b.css';
import '../../css/m/mr73zignz.css';
import '../../css/q/qq4r1_reu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="q9fiilb4b"/><path class="mr73zignz"/><path class="qq4r1_reu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mail-package"} {...others} />);
}

export default Component;
