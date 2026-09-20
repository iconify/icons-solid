import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vsyuz8-2j.css';
import '../../css/e/e3_42n3sf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="vsyuz8-2j"/><path class="e3_42n3sf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:toilet-man"} {...others} />);
}

export default Component;
