import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/i/i8k05e2ok.css';
import '../../css/a/akd1ysboe.css';
import '../../css/r/rynwa9bep.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="vkcj4bcdm"/><path class="i8k05e2ok"/><circle class="akd1ysboe"/><circle class="rynwa9bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:face-with-smiling-open-eyes"} {...others} />);
}

export default Component;
