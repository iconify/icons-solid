import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u9l0xvbmx.css';
import '../../css/j/ji-4p20pf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="u9l0xvbmx"/><path class="ji-4p20pf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hourglass"} {...others} />);
}

export default Component;
