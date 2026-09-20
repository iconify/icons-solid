import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/uyaq-fnmu.css';
import '../../css/e/eueik-c-s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="uyaq-fnmu"/><path class="eueik-c-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:dog-1"} {...others} />);
}

export default Component;
