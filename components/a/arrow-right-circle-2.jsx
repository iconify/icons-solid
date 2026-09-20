import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/yokjecbgj.css';
import '../../css/r/rhnq8dbip.css';
import '../../css/i/iejvc431p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="yokjecbgj"/><path class="rhnq8dbip"/><path class="iejvc431p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:arrow-right-circle-2"} {...others} />);
}

export default Component;
