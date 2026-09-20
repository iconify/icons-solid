import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nv7c-4bph.css';
import '../../css/e/egvay2gnw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="nv7c-4bph"/><path class="egvay2gnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:heater"} {...others} />);
}

export default Component;
