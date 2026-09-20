import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/fur303b7v.css';
import '../../css/l/lusicdbey.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="fur303b7v"/><path class="lusicdbey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:wave-signal-square"} {...others} />);
}

export default Component;
