import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lr_5gbo5a.css';
import '../../css/q/qj9kuabzc.css';
import '../../css/d/d5qwpt3kx.css';
import '../../css/i/i37yl4fkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lr_5gbo5a"/><path class="qj9kuabzc"/><path class="d5qwpt3kx"/><path class="i37yl4fkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:brain-off"} {...others} />);
}

export default Component;
