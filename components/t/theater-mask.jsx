import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/x8jy2_b5i.css';
import '../../css/w/w2tu_jpwj.css';
import '../../css/v/vgcj7aceo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="x8jy2_b5i"/><path class="w2tu_jpwj"/><path class="vgcj7aceo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:theater-mask"} {...others} />);
}

export default Component;
