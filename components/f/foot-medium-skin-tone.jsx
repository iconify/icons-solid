import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwrdxibke.css';
import '../../css/z/ztjnzdb3n.css';
import '../../css/z/z04drlb1l.css';
import '../../css/s/swak8ubny.css';
import '../../css/z/zja7hrpwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pwrdxibke"/><path class="ztjnzdb3n"/><g class="z04drlb1l"><path class="swak8ubny"/><path class="zja7hrpwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:foot-medium-skin-tone"} {...others} />);
}

export default Component;
