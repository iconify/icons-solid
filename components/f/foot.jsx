import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p28dy6bfv.css';
import '../../css/a/ab59mj09g.css';
import '../../css/z/z04drlb1l.css';
import '../../css/s/swak8ubny.css';
import '../../css/z/zja7hrpwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="p28dy6bfv"/><path class="ab59mj09g"/><g class="z04drlb1l"><path class="swak8ubny"/><path class="zja7hrpwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:foot"} {...others} />);
}

export default Component;
