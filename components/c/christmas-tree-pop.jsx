import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rtlo3vb9m.css';
import '../../css/k/kgm_ocjyh.css';
import '../../css/l/l50hzgbne.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="rtlo3vb9m"/><path clip-rule="evenodd" class="kgm_ocjyh"/><path clip-rule="evenodd" class="l50hzgbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:christmas-tree-pop"} {...others} />);
}

export default Component;
