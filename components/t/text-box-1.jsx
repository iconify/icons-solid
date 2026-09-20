import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vbvivqb7i.css';
import '../../css/t/t5_a18gxk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="vbvivqb7i"/><path class="t5_a18gxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:text-box-1"} {...others} />);
}

export default Component;
