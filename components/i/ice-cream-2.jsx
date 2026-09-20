import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/r_ndohbvf.css';
import '../../css/f/f_2qcfbxh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="r_ndohbvf"/><path class="f_2qcfbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ice-cream-2"} {...others} />);
}

export default Component;
