import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tgshv822m.css';
import '../../css/q/qj7v7ob0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="tgshv822m wm-k"/><path class="qj7v7ob0m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mails-gloss"} {...others} />);
}

export default Component;
