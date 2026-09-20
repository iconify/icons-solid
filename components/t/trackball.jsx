import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sczr2xbqg.css';
import '../../css/i/i10xy6qnx.css';
import '../../css/o/o8759zbec.css';
import '../../css/z/zcuu_ry_o.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vbfap3bmb.css';
import '../../css/k/ko8a0qb1n.css';
import '../../css/t/ttd7ih_xv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="sczr2xbqg"/><path class="i10xy6qnx"/><circle class="o8759zbec"/><path class="zcuu_ry_o"/><g class="jn8qy4bru"><path class="vbfap3bmb"/><circle class="ko8a0qb1n"/><path class="ttd7ih_xv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:trackball"} {...others} />);
}

export default Component;
