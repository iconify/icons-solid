import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/q/qnx6idjmr.css';
import '../../css/q/q4kae-b_w.css';
import '../../css/h/hgrrm0nzr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="qnx6idjmr"/><path class="q4kae-b_w"/><path class="hgrrm0nzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:prison"} {...others} />);
}

export default Component;
