import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/bo1rfe8eq.css';
import '../../css/e/ee-5u66pe.css';
import '../../css/g/g_5mfqg0p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="bo1rfe8eq"/><path class="ee-5u66pe"/><path class="g_5mfqg0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:padlock-square-2"} {...others} />);
}

export default Component;
