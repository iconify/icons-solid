import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eh3-3-9cm.css';
import '../../css/s/sk-ey8gzq.css';
import '../../css/l/lop2u4y2i.css';
import '../../css/i/i6gzw25wz.css';
import '../../css/i/i12fh4bbk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="eh3-3-9cm"/><path class="sk-ey8gzq"/><path class="lop2u4y2i"/><path class="i6gzw25wz"/><path class="i12fh4bbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cook"} {...others} />);
}

export default Component;
