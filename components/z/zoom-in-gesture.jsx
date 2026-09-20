import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/pc7nmb7bi.css';
import '../../css/n/n4th_vbly.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="pc7nmb7bi"/><path class="n4th_vbly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:zoom-in-gesture"} {...others} />);
}

export default Component;
